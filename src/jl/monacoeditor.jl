# AUTO GENERATED FILE - DO NOT EDIT

export monacoeditor

"""
    monacoeditor(;kwargs...)

A MonacoEditor component.
Monaco Editor based of https://microsoft.github.io/monaco-editor/
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `defaultLanguage` (String; optional): Default language format for the editor
- `height` (String; optional): height for the editor
- `options` (Dict; optional): The value displayed in the input.
- `value` (String; required): A value that will be printed on the editor
"""
function monacoeditor(; kwargs...)
        available_props = Symbol[:id, :defaultLanguage, :height, :options, :value]
        wild_props = Symbol[]
        return Component("monacoeditor", "MonacoEditor", "monaco_editor", available_props, wild_props; kwargs...)
end

