# AUTO GENERATED FILE - DO NOT EDIT

#' @export
monacoEditor <- function(id=NULL, defaultLanguage=NULL, height=NULL, options=NULL, value=NULL) {
    
    props <- list(id=id, defaultLanguage=defaultLanguage, height=height, options=options, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MonacoEditor',
        namespace = 'monaco_editor',
        propNames = c('id', 'defaultLanguage', 'height', 'options', 'value'),
        package = 'monacoEditor'
        )

    structure(component, class = c('dash_component', 'list'))
}
