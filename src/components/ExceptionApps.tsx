
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ExceptionApps = () => {
  const [exceptionApps, setExceptionApps] = useState([
    '전화',
    '지도',
    '응급상황',
    '카메라'
  ]);
  const [newApp, setNewApp] = useState('');
  const { toast } = useToast();

  const addApp = () => {
    if (newApp.trim() && !exceptionApps.includes(newApp.trim())) {
      setExceptionApps([...exceptionApps, newApp.trim()]);
      setNewApp('');
      toast({
        title: "예외 앱이 추가되었어요! ✨",
        description: `${newApp.trim()}는 이제 제한되지 않아요.`,
      });
    } else if (exceptionApps.includes(newApp.trim())) {
      toast({
        title: "이미 등록된 앱이에요 😊",
        description: "다른 앱을 추가해보세요.",
        variant: "destructive",
      });
    }
  };

  const removeApp = (appToRemove: string) => {
    setExceptionApps(exceptionApps.filter(app => app !== appToRemove));
    toast({
      title: "예외 앱이 제거되었어요",
      description: `${appToRemove}가 목록에서 제거되었습니다.`,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addApp();
    }
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
          <Shield className="h-5 w-5 text-green-500" />
          예외 앱 설정
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          이 앱들은 보행 중이나 누워있을 때도 제한되지 않아요 🛡️
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="예외로 설정할 앱 이름을 입력하세요"
            value={newApp}
            onChange={(e) => setNewApp(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={addApp} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">등록된 예외 앱들</h4>
          <div className="flex flex-wrap gap-2">
            {exceptionApps.map((app) => (
              <Badge
                key={app}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
              >
                {app}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-green-200 dark:hover:bg-green-800"
                  onClick={() => removeApp(app)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          {exceptionApps.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              아직 예외 앱이 없어요. 위에서 추가해보세요! 😊
            </p>
          )}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            💡 <strong>팁:</strong> 전화, 지도, 응급상황 앱 등 꼭 필요한 앱들을 예외로 설정하면 
            안전하면서도 스마트한 사용이 가능해요!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExceptionApps;
