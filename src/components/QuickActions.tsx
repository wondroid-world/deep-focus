
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
      title: "⚠️ 보행 중 스마트폰 사용 감지",
      description: "안전을 위해 스마트폰 사용을 자제해주세요. 주변을 확인하고 걸어주세요.",
      variant: "destructive",
    });
  };

  const simulateLyingWarning = () => {
    toast({
      title: "🌙 침대에서 스마트폰 사용 감지",
      description: "좋은 수면을 위해 스마트폰을 내려놓고 휴식을 취해보세요.",
      variant: "default",
    });
  };

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    toast({
      title: isMonitoring ? "모니터링 일시정지" : "모니터링 시작",
      description: isMonitoring ? "알림이 일시적으로 비활성화됩니다." : "다시 사용 패턴을 감지합니다.",
    });
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">빠른 작업</CardTitle>
          <Badge variant={isMonitoring ? "default" : "secondary"}>
            {isMonitoring ? "활성화" : "일시정지"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={simulateWalkingWarning}
            variant="outline"
            className="flex items-center gap-2 p-4 h-auto flex-col bg-orange-50 hover:bg-orange-100 border-orange-200"
          >
            <Smartphone className="h-6 w-6 text-orange-500" />
            <span className="text-sm font-medium">보행 경고 테스트</span>
          </Button>

          <Button
            onClick={simulateLyingWarning}
            variant="outline"
            className="flex items-center gap-2 p-4 h-auto flex-col bg-purple-50 hover:bg-purple-100 border-purple-200"
          >
            <Clock className="h-6 w-6 text-purple-500" />
            <span className="text-sm font-medium">수면 경고 테스트</span>
          </Button>

          <Button
            onClick={toggleMonitoring}
            variant={isMonitoring ? "destructive" : "default"}
            className="flex items-center gap-2 p-4 h-auto flex-col"
          >
            <Bell className="h-6 w-6" />
            <span className="text-sm font-medium">
              {isMonitoring ? "모니터링 정지" : "모니터링 시작"}
            </span>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            실제 환경에서는 센서를 통해 자동으로 감지됩니다
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
