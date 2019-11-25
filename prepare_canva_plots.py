import numpy as np


class RV:
    def __init__(self, file, instrument):
        try:
            self.data = np.loadtxt(file).T
        except ValueError:
            self.data = np.loadtxt(file, delimiter=',').T

        self.t, self.y, self.e = self.data

        if self.t.mean() > 24e5:
            self.t -= 24e5

        self.instrument = instrument

    def to_canva_data(self):
        data = f"""\
{{\n\
    name: "{self.instrument}",
    type: "error", whiskerLength: 8, showInLegend: false,
    dataPoints: [
        {self.dataPointsString1}
    ]
}},
{{\n\
    name: "{self.instrument}",
    type: "scatter", yValueFormatString: "#0.## m/s", showInLegend: true,
    dataPoints: [
        {self.dataPointsString2}
    ]
}},
        """
        return data


    def fullplot(self):
        temp = open('template_plot_script.html').read()
        data = self.to_canva_data()
        data = ''.join([12*' ' + line + '\n' for line in data.split('\n')])
        temp = temp.replace('DATA', data.strip())
        print(temp)
    
    @property
    def dataPointsString1(self):
        t, y, e = self.data
        s = f'{{ x: {t[0]}, y: [{y[0]-e[0]}, {y[0]+e[0]}] }},\n'
        for tt, yy, ee in zip(t[1:], y[1:], e[1:]):
            s += ' '*8 + f'{{ x: {tt}, y: [{yy-ee}, {yy+ee}] }},\n'
        return s[:-1]

    @property
    def dataPointsString2(self):
        t, y, e = self.data
        s = f'{{ x: {t[0]}, y: {y[0]} }},\n'
        for tt, yy, ee in zip(t[1:], y[1:], e[1:]):
            s += ' '*8 + f'{{ x: {tt}, y: {yy} }},\n'
        return s[:-1]

# print('\n\n')

# for tt, yy, ee in zip(t,y,e):
#     print(f'{{ x: {tt}, y: {yy} }},')