import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  myChart: any = null;
  myChart2: any = null;
  spinner;
  angle;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  /**
   * Creates an instance of DashboardComponent.
   * @param {BreakpointObserver} breakpointObserver
   * @memberof DashboardComponent
   */
  constructor(public breakpointObserver: BreakpointObserver) {}

  /**
   *
   *
   * @memberof DashboardComponent
   */
  ngOnInit(): void {
    this.myChart = echarts.init(document.getElementById('pipe') as any);
    this.myChart2 = echarts.init(document.getElementById('pipe2') as any);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        //selectedMode: false,
        orient: 'vertical',
        x: 'left',
        data: ['House numbers', 'Streets', 'Municipalities', 'Counties'],
      },
      series: [
        {
          name: 'NOMBRE',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 1789, name: 'House numbers' },
            { value: 1072, name: 'Streets' },
            { value: 115, name: 'Municipalities' },
            { value: 388, name: 'Counties' },
          ],
        },
      ],
    };
    this.myChart.setOption(option);

    const posList = [
      'left',
      'right',
      'top',
      'bottom',
      'inside',
      'insideTop',
      'insideLeft',
      'insideRight',
      'insideBottom',
      'insideTopLeft',
      'insideTopRight',
      'insideBottomLeft',
      'insideBottomRight',
    ];
    const labelOption = {
      show: true,

      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {},
      },
    };
    const option2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Forest', 'Desert', 'Wetland'],
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['2013', '2014', '2015', '2016'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [332, 301, 334, 390],
        },
        // {
        //   name: 'Steppe',
        //   type: 'bar',
        //   label: labelOption,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [220, 182, 191, 234, 290]
        // },
        {
          name: 'Desert',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [232, 201, 154, 190],
        },
        {
          name: 'Wetland',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series',
          },
          data: [77, 101, 99, 40],
        },
      ],
    };

    this.myChart2.setOption(option2);
  }
}
