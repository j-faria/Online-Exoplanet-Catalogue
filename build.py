import numpy as np

import pysweetcat as sc
import pyexoplaneteu as exo

stars = sc.get_data()
stars.to_numpy()

exoplanets = exo.get_data()
exoplanets.to_numpy()

for i in range(1):#stars.size):
    star = stars[i]
    
    if star['name'] in exoplanets['star_name']:
        inds, = np.where(exoplanets['star_name'] == star['name'])

    d =	{
        "id": i,
        "star": star['name'],
        "teff": star['teff'],
        "feh": star['feh'],
        "mass": star['mass'],
        "exoplanets": [],
        "exoplanets-mass":[],
        "exoplanets-period": []
    }
