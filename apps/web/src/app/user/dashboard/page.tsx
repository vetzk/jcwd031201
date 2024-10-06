'use client';
import * as React from 'react';
import Sidebar from '@/components/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import withAuth from '@/hoc/authGuard';
import useProfile from '@/helper/useProfile';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '@/contexts/UserContext';
import { MdWidgets } from 'react-icons/md';
import { FaFilter } from 'react-icons/fa';
import { SlOptions } from 'react-icons/sl';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  PieChart,
  Pie,
  Label,
} from 'recharts';

interface IDashboardProps {}

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

const dataChart = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
];
const configChart = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  const [name, setName] = React.useState<string>('');
  const token = localStorage.getItem('token') || '';
  const { user } = React.useContext(UserContext);
  const { data: profile, isError, isLoading } = useProfile(token);
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.desktop, 0);
  }, []);
  React.useEffect(() => {
    if (profile) {
      setName(profile.result.findProfile.firstName);
    }
  }, [profile]);

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1 bg-gray-100 rounded-xl">
          <div className="w-full flex flex-col p-5 gap-5">
            {/* Welcome section */}
            <div className="w-full flex flex-col gap-2 bg-white rounded-xl border-solid border border-black p-3">
              <p className="text-lg sm:text-xl font-semibold">
                Welcome Back, {user?.username}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Good to Have You Back, Let&apos;s Get Started!
              </p>
            </div>

            {/* Buttons section */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-7">
              <div className="w-full flex bg-white rounded-xl border-solid border border-black p-3">
                <div className="w-full flex flex-wrap justify-between items-center gap-3 sm:gap-7">
                  <Button className="text-xs sm:text-base">All Data</Button>
                  <Button className="bg-transparent text-black shadow-none hover:bg-transparent text-xs sm:text-base">
                    Report
                  </Button>
                  <Button className="bg-transparent text-black shadow-none hover:bg-transparent text-xs sm:text-base">
                    Products
                  </Button>
                  <Button className="bg-transparent text-black shadow-none hover:bg-transparent text-xs sm:text-base">
                    Invoices
                  </Button>
                  <Button className="bg-transparent text-black shadow-none hover:bg-transparent text-xs sm:text-base">
                    Order
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white rounded-xl border-solid border border-black p-3">
                <div className="flex items-center gap-3">
                  <Button className="flex items-center gap-3 bg-white text-slate-500 shadow-none border border-solid border-gray-300 text-xs sm:text-base">
                    <MdWidgets size={20} />
                    <p>Customize Widget</p>
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="flex items-center gap-3 bg-white text-slate-500 shadow-none border border-solid border-gray-300 text-xs sm:text-base">
                    <FaFilter size={20} />
                    <p>Filter</p>
                  </Button>
                </div>
              </div>
            </div>

            {/* Profit and sales sections */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-7">
              <div className="w-full flex bg-white rounded-xl border-solid border border-black p-3 sm:p-5">
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-lg sm:text-2xl font-semibold">Profit</p>
                    <SlOptions size={16} />
                  </div>
                  <div className="mb-5 sm:mb-10">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Rp 12.050.000,00
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-slate-300">
                      Avg. Profit Rp 230.000,00
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex bg-white rounded-xl border-solid border border-black p-3 sm:p-5">
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Total Sales
                    </p>
                    <SlOptions size={16} />
                  </div>
                  <div className="mb-5 sm:mb-10">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Rp 23.050.000,00
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-slate-300">
                      Avg. Sales Rp 230.000,00
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex bg-white rounded-xl border-solid border border-black p-3 sm:p-5">
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Total Order
                    </p>
                    <SlOptions size={16} />
                  </div>
                  <div className="mb-5 sm:mb-10">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Rp 23.050.000,00
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-slate-300">
                      Avg. Order Rp 50.000,00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Analytics section */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-7">
              <div className="w-full flex bg-white rounded-xl border-solid border border-black p-3 sm:p-5">
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-lg sm:text-2xl font-semibold">
                        Sales Analytics
                      </p>
                      <p className="text-xs sm:text-lg text-slate-300">
                        Total analytics sales for today
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Select value="monthly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                      <SlOptions size={16} />
                    </div>
                  </div>

                  <div className="w-full">
                    <ChartContainer
                      config={chartConfig}
                      className="min-h-[200px] w-full"
                    >
                      <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar
                          dataKey="desktop"
                          fill="var(--color-desktop)"
                          radius={4}
                        />
                        <Bar
                          dataKey="mobile"
                          fill="var(--color-mobile)"
                          radius={4}
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </div>
              </div>

              {/* Warephase Stats section */}
              <div className="w-full sm:w-3/4 flex flex-col gap-5 bg-white rounded-xl border-solid border border-black p-3 sm:p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <p className="text-lg sm:text-2xl font-semibold">
                      Warephase Stats
                    </p>
                    <FaInfoCircle size={16} />
                  </div>
                  <SlOptions size={16} />
                </div>

                <div>
                  <p className="text-xs sm:text-slate-300">
                    8K Social Visitors
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-lg sm:text-xl font-semibold">
                      Rp 8.002.450,00
                    </p>
                    <p className="text-xs sm:text-slate-300">Actual for sept</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <p className="text-lg sm:text-xl font-semibold">
                        Rp 1.000.450,00
                      </p>
                      <p className="text-xs sm:text-green-500 bg-green-200 rounded-md">
                        {'^'}4.5%
                      </p>
                    </div>
                    <p className="text-xs sm:text-slate-300">GAP</p>
                  </div>
                </div>

                <div>
                  <ChartContainer
                    config={configChart}
                    className="mx-auto aspect-square max-h-[200px] sm:max-h-[250px]"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={dataChart}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={60}
                        strokeWidth={5}
                      >
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-3xl font-bold"
                                  >
                                    {totalVisitors.toLocaleString()}
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-muted-foreground"
                                  >
                                    Visitors
                                  </tspan>
                                </text>
                              );
                            }
                          }}
                        />
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
