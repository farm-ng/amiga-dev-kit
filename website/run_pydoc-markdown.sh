#!/bin/bash -e

# generate the python markdown for the CircuitPython API
pydoc-markdown '{
    loaders: [
        {
            type: python,
            search_path: [../circuitpy/lib/farm_ng]
        }
    ],
    processors: [
        {
            type: filter,
            skip_empty_modules: true
        },
        {
            type: smart
        },
        {
            type: crossref
        }
    ],
    renderer: {
        type: docusaurus,
        docs_base_path: docs,
        relative_output_path: reference/circuitpy,
        relative_sidebar_path: sidebar.json,
        sidebar_top_level_label: null
    }
  }'

# generate the python markdown for the Brain API
pydoc-markdown '{
    loaders: [
        {
            type: python,
            search_path: [../amiga-brain-api/py/farm_ng]
        }
    ],
    processors: [
        {
            type: filter,
            skip_empty_modules: True,
        },
        {
            type: smart
        },
        {
            type: crossref
        }
    ],
    renderer: {
        type: docusaurus,
        docs_base_path: docs,
        relative_output_path: reference/brain,
        relative_sidebar_path: sidebar.json,
        sidebar_top_level_label: null
    }
  }'
