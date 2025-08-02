"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react"; 
import { useState } from "react";

export default function ContectUs() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your email sending logic here
    alert("تم إرسال رسالتك بنجاح!");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-green-700">
            تواصل معنا
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-600 text-3xl hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-500 text-3xl hover:scale-110 transition" />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="text-right"
            />
            <Textarea
              placeholder="اكتب ملاحظاتك أو اقتراحاتك هنا"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              required
              className="text-right"
              rows={4}
            />
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              إرسال
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}