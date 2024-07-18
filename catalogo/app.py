from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Lee el archivo Excel (asegúrate de tener el archivo 'datos.xlsx' en el mismo directorio)
    df = pd.read_excel('datos.xlsx')

    # Obtiene las dos primeras columnas
    columns_to_display = df.iloc[:, :2]

    # Convierte los datos a HTML
    html_table = columns_to_display.to_html(index=False)

    return render_template('index.html', table=html_table)

if __name__ == '__main__':
    app.run(debug=True)