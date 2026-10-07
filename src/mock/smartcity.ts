export interface SmartCityEvent {
  name: string
  position: { x: number; y: number }
  id: string
  type: string
}

export interface SmartCityMetric {
  name: string
  number: number
  unit: string
}

export type SmartCityInfoKey = 'iot' | 'event' | 'power' | 'test'

const METRICS: Record<SmartCityInfoKey, { name: string; unit: string; min: number; max: number }> = {
  iot: { name: '物联网设备', unit: '个', min: 800, max: 3200 },
  event: { name: '城市事件', unit: '件', min: 20, max: 260 },
  power: { name: '电力能耗', unit: 'kWh', min: 400, max: 4800 },
  test: { name: '监测点位', unit: '个', min: 12, max: 180 },
}

const EVENT_POOL = [
  { name: '火警', types: ['烟雾报警', '明火报警', '温度异常', '消防预警'] },
  { name: '治安', types: ['人员聚集', '异常闯入', '治安巡逻', '纠纷报警'] },
  { name: '电力', types: ['线路过载', '配电故障', '电压异常', '设备停电'] },
]

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomItem<T>(list: T[]) {
  return list[randomInt(0, list.length - 1)]
}

export function createSmartCityInfo(): Record<SmartCityInfoKey, SmartCityMetric> {
  const info = {} as Record<SmartCityInfoKey, SmartCityMetric>
  ;(Object.keys(METRICS) as SmartCityInfoKey[]).forEach((key) => {
    const metric = METRICS[key]
    info[key] = {
      name: metric.name,
      unit: metric.unit,
      number: randomInt(metric.min, metric.max),
    }
  })
  return info
}

export function createSmartCityList(): SmartCityEvent[] {
  const count = randomInt(3, 5)
  return Array.from({ length: count }, () => {
    const pool = randomItem(EVENT_POOL)
    return {
      name: pool.name,
      type: randomItem(pool.types),
      id: Math.random().toString(16).slice(2),
      // 场景按 x / 5 - 10、y / 5 - 10 换算，10~90 会落在城市模型附近
      position: {
        x: randomInt(10, 90),
        y: randomInt(10, 90),
      },
    }
  })
}
