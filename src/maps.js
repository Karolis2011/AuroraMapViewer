module.exports = {
  a1: {
    file: 'aurora-1_centcomm-1.png',
    name: 'Central Command'
  },
  a2: {
    file: 'aurora-2_under-station-1.png',
    next: 'a3',
    name: 'Under Station'
  },
  a3: {
    file: 'aurora-3_sublevel-1.png',
    name: 'Sublevel',
    next: 'a4',
    prev: 'a2'
  },
  a4: {
    file: 'aurora-4_mainlevel-1.png',
    name: 'Main level',
    next: 'a5',
    prev: 'a3'
  },
  a5: {
    file: 'aurora-5_interstitial-1.png',
    name: 'Construction level',
    next: 'a6',
    prev: 'a4'
  },
  a6: {
    file: 'aurora-6_surface-1.png',
    name: 'Surface',
    next: 'a7',
    prev: 'a5'
  },
  a7: {
    file: 'aurora-7_roof-1.png',
    name: 'Roof',
    prev: 'a6'
  }
}