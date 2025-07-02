
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Clock, Smartphone } from 'lucide-react';

interface Reminder {
  id: string;
  type: 'walking' | 'lying';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

const ReminderHistory = () => {
  const [reminders] = useState<Reminder[]>([
    {
      id: '1',
      type: 'walking',
      message: '🚶‍♀️ 지금은 걸을 때가 아니라 쉴 때에요! 안전을 위해 잠시 폰을 내려놓고 주변을 확인해주세요. 당신의 안전이 가장 소중해요! 💙',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30분 전
      acknowledged: true
    },
    {
      id: '2',
      type: 'lying',
      message: '🌙 눈과 몸도 함께 쉬어야 해요. 좋은 꿈을 위해 스마트폰을 내려놓고 편안한 휴식을 취해보세요. 내일 더 상쾌한 아침을 맞이할 수 있을 거예요! ✨',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2시간 전
      acknowledged: true
    },
    {
      id: '3',
      type: 'walking',
      message: '⚠️ 보행 중 스마트폰 사용이 감지되었어요. 주변 상황에 주의하시고, 안전한 곳에서 확인해주세요!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4시간 전
      acknowledged: false
    }
  ]);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInMinutes < 24 * 60) {
      return `${Math.floor(diffInMinutes / 60)}시간 전`;
    } else {
      return `${Math.floor(diffInMinutes / (24 * 60))}일 전`;
    }
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
          <Bell className="h-5 w-5 text-blue-500" />
          받은 리마인더 📝
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {reminders.length === 0 ? (
          <div className="text-center py-6">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">아직 받은 리마인더가 없어요</p>
          </div>
        ) : (
          reminders.map((reminder) => (
            <div key={reminder.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white/50 dark:bg-gray-800/50">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {reminder.type === 'walking' ? (
                    <Smartphone className="h-4 w-4 text-orange-500" />
                  ) : (
                    <Clock className="h-4 w-4 text-purple-500" />
                  )}
                  <Badge 
                    variant={reminder.type === 'walking' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {reminder.type === 'walking' ? '보행 중' : '침대에서'}
                  </Badge>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formatTime(reminder.timestamp)}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                {reminder.message}
              </p>
              <Badge 
                variant={reminder.acknowledged ? 'outline' : 'default'}
                className="text-xs"
              >
                {reminder.acknowledged ? '확인됨' : '미확인'}
              </Badge>
            </div>
          ))
        )}
        {reminders.length > 0 && (
          <Button variant="outline" size="sm" className="w-full">
            전체 히스토리 보기
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReminderHistory;
