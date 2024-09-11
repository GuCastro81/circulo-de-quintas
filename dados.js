// Array com os dados dos acordes (você pode personalizar)
const acordes = [
    { acorde: 'C', conexoes: 'F, G, Am', camelot: '7B, 9B, 8A', openKeys: '12d, 2d, 1m' },
    { acorde: 'D', conexoes: 'G, A, Bm', camelot: '9B, 11B, 10A', openKeys: '2d, 4d, 3m' },
    { acorde: 'E', conexoes: 'A, B, Db/C#m', camelot: '11B, 1B, 12A', openKeys: '4d, 6d, 5m' },
    { acorde: 'F', conexoes: 'Bb, C, Dm', camelot: '6B, 8B, 7A', openKeys: '10d, 11d, 12m' },
    { acorde: 'G', conexoes: 'C, D, Em', camelot: '8B, 10B, 9A', openKeys: '1d, 3d, 2m' },
    { acorde: 'A', conexoes: 'D, E, F#m/Gbm', camelot: '9B, 12B, 11A', openKeys: '3d, 5d, 4m' },
    { acorde: 'B', conexoes: 'E, F#/Gb, Abm/G#m', camelot: '12B, 2B, 1A', openKeys: '5d, 7d, 6m' },
    { acorde: 'Db', conexoes: 'F#/Gb, Ab, Bbm', camelot: '2B, 4B, 3A', openKeys: '7d, 9d, 8m' },
    { acorde: 'Eb', conexoes: 'Ab, Bb, Cm', camelot: '4B, 6B, 5A', openKeys: '9d, 11d, 10m' },
    { acorde: 'F#', conexoes: 'B, Db, Ebm', camelot: '1B, 3B, 2A', openKeys: '6d, 8d, 7m' },
    { acorde: 'Ab', conexoes: 'Db, Eb, Fm', camelot: '3B, 5B, 4A', openKeys: '8d, 10d, 9m' },
    { acorde: 'Bb', conexoes: 'Eb, F, Gm', camelot: '5B, 7B, 6A', openKeys: '10d, 12d, 11m' },
    { acorde: 'Cm', conexoes: 'Fm, Gm, Eb', camelot: '4A, 6A, 5B', openKeys: '9m, 11m, 10d' },
    { acorde: 'Dm', conexoes: 'Gm, Am, F', camelot: '6A, 8A, 7B', openKeys: '11m, 1m, 12d' },
    { acorde: 'Em', conexoes: 'Am, Bm, G', camelot: '8A, 10A, 9B', openKeys: '1m, 3m, 2d' },
    { acorde: 'Fm', conexoes: 'Bbm, Cm, Ab', camelot: '3A, 5A, 4B', openKeys: '8m, 10m, 9d' },
    { acorde: 'Gm', conexoes: 'Cm, Dm, Bb', camelot: '5A, 7A, 6B', openKeys: '10m, 12m, 11d' },
    { acorde: 'Am', conexoes: 'Dm, Em, C', camelot: '7A, 9A, 8B', openKeys: '12m, 2m, 1d' },
    { acorde: 'Bm', conexoes: 'Em, F#m/Gbm, D', camelot: '9A, 11A, 10B', openKeys: '2m, 4m, 3d' },
    { acorde: 'C#m', conexoes: 'F#m/Gbm, Abm/G#m, E', camelot: '11A, 1A, 12B', openKeys: '4m, 6m, 5d' },
    { acorde: 'F#m', conexoes: 'Bm, Dbm/C#m, A', camelot: '10A, 12A, 11B', openKeys: '3m, 5m, 4d' },
    { acorde: 'G#m', conexoes: 'Dbm/C#m, Ebm, B', camelot: '12A, 2A, 1B', openKeys: '5m, 7m, 5m' },
    { acorde: 'Abm', conexoes: 'Db/C#m, Ebm, B', camelot: '12A, 2A, 1B', openKeys: '5m, 7m, 6d' },
    { acorde: 'Bbm', conexoes: 'Ebm, Fm, Db', camelot: '2A, 4A, 3B', openKeys: '7m, 9m, 8d' },
    { acorde: 'Dbm', conexoes: 'F#m/Gbm, Abm/G#m, E', camelot: '11A, 1A, 12B', openKeys: '4m, 6m, 5d' },
    { acorde: 'Ebm', conexoes: 'Abm, Bbm, F#/Gb', camelot: '1A, 3A, 2A', openKeys: '6m, 8m, 7d' }
  ];

  