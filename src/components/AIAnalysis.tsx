
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIAnalysisProps {
  data: Array<{
    day: string;
    walking: number;
    lying: number;
  }>;
  period: 'week' | 'month' | 'quarter' | 'year';
}

const AIAnalysis = ({ data, period }: AIAnalysisProps) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateAnalysis = () => {
    setIsLoading(true);
    
    // AI 분석 시뮬레이션
    setTimeout(() => {
      const totalWalking = data.reduce((sum, day) => sum + day.walking, 0);
      const totalLying = data.reduce((sum, day) => sum + day.lying, 0);
      const avgWalking = Math.round(totalWalking / data.length);
      const avgLying = Math.round(totalLying / data.length);
      
      const periodText = period === 'week' ? '주간' : period === 'month' ? '월간' : period === 'quarter' ? '분기' : '연간';
      
      const analysisText = `📊 ${periodText} 사용 패턴 분석

🚶‍♀️ **보행 중 사용**
- 일평균: ${avgWalking}분
- 총 사용: ${totalWalking}분
${avgWalking > 30 ? '⚠️ 안전을 위해 보행 중 사용을 줄여보세요!' : '✅ 안전한 보행 습관을 유지하고 계시네요!'}

🛏️ **침대에서 사용**
- 일평균: ${avgLying}분  
- 총 사용: ${totalLying}분
${avgLying > 60 ? '💤 수면의 질 향상을 위해 침대에서의 사용을 줄여보세요!' : '✅ 좋은 수면 습관을 유지하고 계시네요!'}

🎯 **맞춤 개선 계획**
1. ${avgWalking > 30 ? '보행 중 알림 민감도를 높여보세요' : '현재 보행 습관을 유지하세요'}
2. ${avgLying > 60 ? '침대 시간 알림을 30분으로 설정해보세요' : '현재 수면 습관을 유지하세요'}
3. 운동 모드를 활용해 의도적 활동 시간을 구분해보세요

💡 **이번 ${periodText} 하이라이트**
가장 건강한 하루: ${data.reduce((best, day) => (day.walking + day.lying) < (best.walking + best.lying) ? day : best).day}요일 🌟`;

      setAnalysis(analysisText);
      setIsLoading(false);
      
      toast({
        title: "AI 분석 완료! 🤖✨",
        description: "당신의 사용 패턴을 분석하고 맞춤 개선안을 준비했어요!",
      });
    }, 2000);
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <Brain className="h-5 w-5 text-purple-500" />
            AI 습관 분석 & 개선 계획
          </CardTitle>
          <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
            Beta
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!analysis ? (
          <div className="text-center py-6">
            <Button 
              onClick={generateAnalysis}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isLoading ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-spin" />
                  AI가 분석 중이에요...
                </>
              ) : (
                <>
                  <Lightbulb className="h-4 w-4 mr-2" />
                  맞춤 분석 시작하기
                </>
              )}
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              사용 패턴을 분석해서 개인 맞춤 개선안을 제공해드려요
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-medium">
              {analysis}
            </pre>
            <Button 
              onClick={() => setAnalysis(null)}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              새로 분석하기
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAnalysis;
