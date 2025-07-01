
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Smartphone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuickActions = () => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const { toast } = useToast();

  const simulateWalkingWarning = () => {
    toast({
      title: "🚶‍♀️ 지금은 걸을 때가 아니라 쉴 때에요!",
      description: "안전을 위해 잠시 폰을 내려놓고 주변을 확인해주세요. 당신의 안전이 가장 소중해요! 💙",
      variant: "destructive",
    });
  };

  const simulateLyingWarning = () => {
    toast({
      title: "🌙 눈과 몸도 함께 쉬어야 해요",
      description: "좋은 꿈을 위해 스마트폰을 내려놓고 편안한 휴식을 취해보세요. 내일 더 상쾌한 아침을 맞이할 수 있을 거예요! ✨",
      variant: "default",
    });
  };

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    toast({
      title: isMonitoring ? "잠시 쉬어가도 괜찮아요! 🤗" : "다시 함께 시작해볼까요? 💪",
      description: isMonitoring ? "알림이 일시적으로 멈춰요. 언제든 다시 시작할 수 있어요!" : "이제 다시 건강한 습관을 함께 만들어가요!",
    });
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">빠른 체험 🎮</CardTitle>
          <Badge variant={isMonitoring ? "default" : "secondary"}>
            {isMonitoring ? "활성화 중" : "휴식 중"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={simulateWalkingWarning}
            variant="outline"
            className="flex items-center gap-2 p-4 h-auto flex-col bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700"
          >
            <Smartphone className="h-6 w-6 text-orange-500" />
            <span className="text-sm font-medium">보행 알림 체험</span>
          </Button>

          <Button
            onClick={simulateLyingWarning}
            variant="outline"
            className="flex items-center gap-2 p-4 h-auto flex-col bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700"
          >
            <Clock className="h-6 w-6 text-purple-500" />
            <span className="text-sm font-medium">수면 알림 체험</span>
          </Button>

          <Button
            onClick={toggleMonitoring}
            variant={isMonitoring ? "destructive" : "default"}
            className="flex items-center gap-2 p-4 h-auto flex-col"
          >
            <Bell className="h-6 w-6" />
            <span className="text-sm font-medium">
              {isMonitoring ? "잠시 휴식" : "다시 시작"}
            </span>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            실제로는 센서가 자동으로 감지해서 알려드려요! 🤖✨
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
