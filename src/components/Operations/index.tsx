'use strict';
import './styles.css';
import {
    ColDef,
    GetRowIdParams,
    iconSetMaterial,
    RowSelectionOptions,
    themeQuartz,
    ValueFormatterParams
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef, useState } from 'react';
import { IRow } from '../../models/rows';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const dateFormatter = (params: ValueFormatterParams): string => {
    return new Date(params.value).toLocaleDateString("en-us", {

        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",

    });
};

const rowSelection: RowSelectionOptions = {
    mode: 'singleRow',
    checkboxes: true,
    enableClickSelection: true,
};

const myTheme = themeQuartz
    .withPart(iconSetMaterial)
    .withParams({
        accentColor: "#15BDE8",
        backgroundColor: "none",
        borderColor: "#ffffff00",
        borderRadius: 20,
        browserColorScheme: "dark",
        cellHorizontalPaddingScale: 1,
        chromeBackgroundColor: {
            ref: "backgroundColor"
        },
        columnBorder: false,
        fontFamily: {
            googleFont: "Inter"
        },
        fontSize: 16,
        foregroundColor: "#BBBEC9",
        headerBackgroundColor: "#292D5A",
        headerFontSize: 14,
        headerFontWeight: 500,
        headerTextColor: "#FFFFFF",
        headerVerticalPaddingScale: 0.9,
        iconSize: 20,
        rowBorder: false,
        rowVerticalPaddingScale: 1.2,
        sidePanelBorder: false,
        spacing: 8,
        wrapperBorder: false,
        wrapperBorderRadius: 0
    });

const themes = [myTheme];

export default function GridData() {

    const [theme] = useState(themes[0]);

    const containerStyle = useMemo(() => ({ width: "99.5%", height: "99.5%" }), []);
    const gridStyle = useMemo(() => ({ height: "78vh", width: "90wh" }), []);

    const gridApiRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState<IRow[]>([]);

    const [columnDefs] = useState<ColDef[]>([

        {
            headerName: "Id",
            field: "recordId",
            width: 120,
            headerTooltip: "Operation Id",
            filter: true
        },
        {
            headerName: "Created At",
            field: "createdAt",
            valueFormatter: dateFormatter,
            width: 200,
            headerTooltip: "Timestamp"
        },
        {
            headerName: "Operand One",
            field: "operandOne",
            width: 150,
            headerTooltip: "First Operand"
        },
        {
            headerName: "Operand Two",
            field: "operandTwo",
            width: 150,
            headerTooltip: "Second Operand"
        },
        {
            headerName: "Operator",
            field: "operator",
            width: 150,
            headerTooltip: "Operator",
            filter: true
        },
        {
            headerName: "Result",
            field: "result",
            valueFormatter: (params: ValueFormatterParams) => {
                return params.value.toLocaleString();
            },
            width: 150,
            headerTooltip: "Result",
            filter: true
        },
        {
            headerName: "Cost",
            field: "cost",
            valueFormatter: (params: ValueFormatterParams) => {
                return "$" + params.value.toLocaleString();
            },
            width: 100,
            headerTooltip: "Cost",
            filter: true
        },
        {
            headerName: "Username",
            field: "username",
            width: 200,
            headerTooltip: "Username"
        },

    ]);

    const autoGroupColumnDef = useMemo<ColDef>(() => {
        return {
            headerName: 'Operation Id',
            cellRenderer: 'agGroupCellRenderer',
            field: 'recordId',
        };
    }, []);

    const onGridReady = useCallback(() => {

        // recordsService.findRecords(0, 1000, 0, 1000)
        //     .then(response => {
        //         setRowData(response.data.records);
        //     })

    }, []);

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            filter: true,
            editable: true,
        };
    }, []);

    const getRowId = useCallback(function (params: GetRowIdParams) {
        return params.data.recordId;
    }, []);


    const removeSelected = useCallback(() => {
        const selectedData = gridApiRef.current!.api.getSelectedRows();
        // const record: number = selectedData[0].recordId;
        // deleteRecords.deleteRecordsById(record);
        gridApiRef.current!.api.applyTransaction({
            remove: selectedData,
        })!;
    }, []);

    return (

        <div style={containerStyle}>
            <div style={gridStyle}>
                {/* <div className="button-delete">
                    <FlexboxGrid justify="end">
                        <Button size="xs" appearance="subtle"
                            startIcon={<AddOutlineIcon />}
                            onClick={removeSelected}>
                            <Text weight="medium" color="red" size="md">Delete</Text>
                        </Button>
                    </FlexboxGrid>
                </div> */}
                
                <Button  className="button-delete" onClick={removeSelected} style={{ position: "relative", top: "5px", left: "90%" }}size="medium" color="error" startIcon={<DeleteIcon />}>
                    Delete    
                </Button>

                <AgGridReact
                    ref={gridApiRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={8}
                    rowSelection={rowSelection}
                    autoGroupColumnDef={autoGroupColumnDef}
                    groupDefaultExpanded={1}
                    getRowId={getRowId}
                    onGridReady={onGridReady}
                    theme={theme}

                />
            </div>
        </div>
    );

}


