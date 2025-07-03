"use client"
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'moderator';
  loginTime: string;
  expiresAt: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = {
  email: 'admin@attarconnect.com',
  password: 'admin123'
};

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing admin session on mount
    checkExistingSession();
  }, []);

  const checkExistingSession = () => {
    try {
      const sessionData = localStorage.getItem('adminSession');
      if (sessionData) {
        const session = JSON.parse(sessionData);
        const now = new Date();
        const expiresAt = new Date(session.expiresAt);

        if (now <= expiresAt) {
          setUser(session);
          // Also set cookie for middleware
          document.cookie = `adminSession=${sessionData}; path=/; max-age=${Math.floor((expiresAt.getTime() - now.getTime()) / 1000)}`;
        } else {
          // Session expired, clean up
          localStorage.removeItem('adminSession');
          localStorage.removeItem('adminRememberMe');
          document.cookie = 'adminSession=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        }
      }
    } catch (error) {
      console.error('Error checking admin session:', error);
      // Clean up corrupted session data
      localStorage.removeItem('adminSession');
      localStorage.removeItem('adminRememberMe');
      document.cookie = 'adminSession=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string, rememberMe = false): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check credentials
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        const expirationTime = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000; // 7 days or 24 hours
        const adminSession: AdminUser = {
          id: 'admin-1',
          name: 'Admin User',
          email: email,
          role: 'super_admin',
          loginTime: new Date().toISOString(),
          expiresAt: new Date(Date.now() + expirationTime).toISOString()
        };

        // Store session
        const sessionData = JSON.stringify(adminSession);
        localStorage.setItem('adminSession', sessionData);
        
        if (rememberMe) {
          localStorage.setItem('adminRememberMe', 'true');
        }

        // Set cookie for middleware
        const maxAge = Math.floor(expirationTime / 1000);
        document.cookie = `adminSession=${sessionData}; path=/; max-age=${maxAge}`;

        setUser(adminSession);
        return { success: true };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    // Clear all session data
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminRememberMe');
    document.cookie = 'adminSession=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    
    setUser(null);
    router.push('/admin/login');
  };

  const value: AdminAuthContextType = {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthContextType {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}