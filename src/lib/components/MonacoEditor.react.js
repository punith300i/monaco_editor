import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from "@monaco-editor/react";

/**
 * Monaco Editor based of https://microsoft.github.io/monaco-editor/
 */
export default class MonacoEditor extends Component {
    render() {
        const { id, value, height, defaultLanguage, options, setProps } = this.props;
        const handleEditorChange = (newValue, event) => {
            if (setProps) {
                setProps({ value: newValue });
            }
        };
        return (
            <div id={id} style={{ border: "1px solid #ccc" }}>
                <Editor
                    height={height}
                    defaultLanguage={defaultLanguage}
                    onChange={handleEditorChange}
                    options={options}
                    value={value}
                />
            </div>
        );
    }
}

MonacoEditor.defaultProps = {};

MonacoEditor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A value that will be printed on the editor
     */
    value: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    options: PropTypes.object,

    /**
     * height for the editor
     */

    height: PropTypes.string,

    /**
     * Default language format for the editor
     */

    defaultLanguage: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
