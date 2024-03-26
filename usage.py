import monaco_editor
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

editor_options = {
    "autoIndent": "full",
    "contextmenu": True,
    "fontFamily": "monospace",
    "fontSize": 13,
    "lineHeight": 24,
    "matchBrackets": "always",
    "minimap": {
        "enabled": False,
    },
    "scrollbar": {
        "horizontalSliderSize": 4,
        "verticalSliderSize": 18,
    },
    "selectOnLineNumbers": True,
    "roundedSelection": False,
    "readOnly": False,
    "cursorStyle": "line",
    "automaticLayout": True,
}

app.layout = html.Div([
    monaco_editor.MonacoEditor(
        id="hello",
        value="Test",
        height="40vh",
        defaultLanguage="sparql",
        options=editor_options
    ),
    html.Div(id='output')
])


@callback(
    Output('output', 'children'),
    Input('hello', 'value')
)
def display_click_count(value):
    return f'Editor Text: {value}'

if __name__ == '__main__':
    app.run_server(debug=True)
