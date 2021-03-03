import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentChecked, ChangeDetectorRef} from '@angular/core';
import {createFromConfig, Sprite} from '@amcharts/amcharts4/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {cloneDeep} from 'lodash';
import {AmChartsLogo} from '@amcharts/amcharts4/.internal/core/elements/AmChartsLogo';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.scss']
})
export class TestChartComponent implements AfterViewInit {

  @ViewChild('chartElement') chartElement: ElementRef<HTMLElement> | undefined;

  chart: Sprite | undefined;
  config = {
    'colors': {'list': ['#9887AF', '#6698B9', '#66B185', '#BECC66', '#F8DE66', '#FEA26F', '#DA6679', '#AC9EBE', '#84ACC6', '#84C09C', '#CAD584', '#F8E484', '#FEC884', '#E08493', '#BFB5CD', '#A1BFD3', '#A1CEB4', '#D6DEA1', '#F9E9A1', '#FDD4A1', '#E7A1AD', '#D3CCDC', '#BFD3E0', '#BFDDCB', '#E2E8BF', '#F9EFBF', '#FCE1BF', '#EDBFC6']},
    'dataFields': {'name': 'category', 'value': 'Количество'},
    'seriesTemplates': {
      '0': {
        'tooltip': {'type': 'Tooltip', 'forceCreate': true, label: {'wrap': true}},
        'columns': {'tooltipText': '{name}\n{value}'},
        'bullets': [{
          'label': {
            'text': '{name}\n{value}',
            'textAlign': 'middle',
            'fill': '#fff',
            'wrap': true,
            'truncate': false,
            'hideOversized': true
          }, 'type': 'LabelBullet', 'locationY': 0.5, 'locationX': 0.5
        }]
      }
    },
    'responsive': {'enabled': true, 'useDefault': false},
    'language': {'locale': 'ru_RU'},
    'paddingTop': 10,
    'paddingRight': 10,
    'paddingBottom': 10,
    'paddingLeft': 10,
    'legend': {'disabled': true},
    'titles': [{
      'text': '[#000000 font-style:  text-decoration: ]Treemap[/]',
      'color': '#000000',
      'disabledMargin': true,
      'disabledPadding': true,
      'wrap': true,
      'textAlign': 'middle',
      'events': {}
    }],
    'children': [],
    'events': {},
    'data': [{
      'category': 'Комплекс территориальных ОИВ',
      'pulled': false,
      'Количество': 22,
      'Количество_': 3.1354942159291497,
      'Количество__': 22,
      'color': '#63be7b',
      '0_color': '#63be7b',
      'total': 22
    }, {
      'category': 'Комплекс АМиПМ',
      'pulled': false,
      'Количество': 18,
      'Количество_': 2.9444389791664403,
      'Количество__': 18,
      'color': '#97cd7e',
      '0_color': '#97cd7e',
      'total': 18
    }, {
      'category': 'Социальный комплекс',
      'pulled': false,
      'Количество': 16,
      'Количество_': 2.833213344056216,
      'Количество__': 16,
      'color': '#b1d580',
      '0_color': '#b1d580',
      'total': 16
    }, {
      'category': 'Комплекс строительства',
      'pulled': false,
      'Количество': 14,
      'Количество_': 2.70805020110221,
      'Количество__': 14,
      'color': '#ccdd82',
      '0_color': '#ccdd82',
      'total': 14
    }, {
      'category': 'Комплекс региональной безопасности',
      'pulled': false,
      'Количество': 12,
      'Количество_': 2.5649493574615367,
      'Количество__': 12,
      'color': '#e6e483',
      '0_color': '#e6e483',
      'total': 12
    }, {
      'category': 'Комплекс городского хозяйства',
      'pulled': false,
      'Количество': 10,
      'Количество_': 2.3978952727983707,
      'Количество__': 10,
      'color': '#ffeb84',
      '0_color': '#ffeb84',
      'total': 10
    }, {
      'category': 'Экономический комплекс',
      'pulled': false,
      'Количество': 10,
      'Количество_': 2.3978952727983707,
      'Количество__': 10,
      'color': '#ffeb84',
      '0_color': '#ffeb84',
      'total': 10
    }, {
      'category': 'Комплекс Мэра',
      'pulled': false,
      'Количество': 6,
      'Количество_': 1.9459101490553132,
      'Количество__': 6,
      'color': '#fbaa77',
      '0_color': '#fbaa77',
      'total': 6
    }, {
      'category': 'Транспортный комплекс',
      'pulled': false,
      'Количество': 4,
      'Количество_': 1.6094379124341003,
      'Количество__': 4,
      'color': '#f98971',
      '0_color': '#f98971',
      'total': 4
    }]
  };

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'paddingTop',
      type: 'input',
      templateOptions: {
        label: 'padding Top',
        appearance: 'outline',
      }
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.chart = createFromConfig(cloneDeep(this.config), this.chartElement?.nativeElement, am4charts.TreeMap);
    this.cdr.detectChanges();
  }

}
