import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
 import { User } from '../interFace/types'; // Assuming you have a User type defined
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils'; 

const loginSchema = z.object({
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, { message: '  الجوال غير صالح' }),
  password: z.string().min(8, { message: 'كلمة المرور يجب أن تتكون من 8 أحرف على الأقل' }),
});

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data : User) => {
    console.log('بيانات تسجيل الدخول:', data);
    setIsLoggedIn(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted dark:bg-background">
      <Card className="w-full max-w-md mx-4 sm:mx-0 text-right">
        <CardHeader className="bg-green-700 text-white rounded-t-md">
          <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
            <LogIn className="w-6 h-6" />
            <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
          </div>
          <CardDescription className="text-gray-200 mt-2 text-right">
            أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول إلى حسابك.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          {isLoggedIn ? (
            <div className="text-center bg-green-50 rounded-md p-6">
              <h3 className="text-xl font-semibold text-green-700">تم تسجيل الدخول بنجاح!</h3>
              <p className="text-gray-600 mt-2">مرحباً بك مرة أخرى.</p>
              <a href="/">
                <Button className="mt-4 w-full" variant="default">
                  العودة إلى الصفحة الرئيسية
                </Button>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* حقل البريد الإلكتروني */}
              <div className="grid w-full items-center gap-2 text-right">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* حقل كلمة المرور */}
              <div className="grid w-full items-center gap-2 text-right">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* زر تسجيل الدخول */}
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                تسجيل الدخول
              </Button>

              {/* رابط إنشاء حساب */}
              <div className="text-center text-sm text-muted-foreground mt-4">
                هل أنت مستخدم جديد؟
                <a href="/register" className="text-green-600 hover:underline mr-1">
                  إنشاء حساب جديد
                </a>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
