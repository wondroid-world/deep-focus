
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Clock, TrendingUp, Bell } from 'lucide-react';
import StatsChart from '@/components/StatsChart';
import QuickActions from '@/components/QuickActions';

const Dashboard = () => {
  // Mock data for demonstration
  const todayStats = {
    walkingUsage: 45, // minutes
    lyingUsage: 120, // minutes
    totalWarnings: 8,
    goalProgress: 65 // percentage
  };

  const weeklyData = [
    { day: '월', walking: 30, lying: 90 },
    { day: '화', walking: 45, lying: 110 },
    { day: '수', walking: 25, lying: 85 },
    { day: '목', walking: 40, lying: 95 },
    { day: '금', walking: 35, lying: 120 },
    { day: '토', walking: 55, lying: 140 },
    { day: '일', walking: 45, lying: 120 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">StayFocus</h1>
          <p className="text-gray-600">건강한 스마트폰 사용 습관을 만들어보세요</p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">보행 중 사용</CardTitle>
              <Smartphone className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{todayStats.walkingUsage}분</div>
              <p className="text-xs text-gray-500 mt-1">오늘 총 사용 시간</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">침대에서 사용</CardTitle>
              <Clock className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-500">{todayStats.lyingUsage}분</div>
              <p className="text-xs text-gray-500 mt-1">오늘 총 사용 시간</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">경고 알림</CardTitle>
              <Bell className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{todayStats.totalWarnings}회</div>
              <p className="text-xs text-gray-500 mt-1">오늘 발생한 경고</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">목표 달성률</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{todayStats.goalProgress}%</div>
              <Progress value={todayStats.goalProgress} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Weekly Chart */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">주간 사용 패턴</CardTitle>
          </CardHeader>
          <CardContent>
            <StatsChart data={weeklyData} />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <QuickActions />

        {/* Status Badge */}
        <div className="text-center">
          <Badge variant="outline" className="px-4 py-2 text-sm bg-green-100 text-green-700 border-green-300">
            현재 상태: 정상 사용 중
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
