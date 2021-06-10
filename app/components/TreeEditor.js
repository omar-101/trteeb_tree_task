import React, { useState } from 'react';
import SortableTree, { removeNodeAtPath, addNodeUnderParent } from 'react-sortable-tree';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import api from '../api';

const TreeEditor = () => {
    const [treeData, setTreeData] = useState([
        { name: 'menu' },
    ]);
    const insertNode = (rowInfo) => {
        const itemName = prompt("Item Name");
        if (itemName) {
            const newTree = addNodeUnderParent({
                treeData: treeData,
                newNode: { name: itemName },
                expandParent: true,
                parentKey: rowInfo ? rowInfo.treeIndex : undefined,
                getNodeKey: ({ treeIndex }) => treeIndex,
            });
            setTreeData(newTree.treeData);
        }
    }

    const deleteNode = (rowInfo) => {
        const { path } = rowInfo;
        const newTree = removeNodeAtPath({
            treeData: treeData,
            path,
            getNodeKey: ({ treeIndex }) => treeIndex,
        });
        setTreeData(newTree);
    }


    const saveItem = async () => {
        try {
            const result = await api.insertOneFood({ menu: treeData });
            alert(result.message);
            setTreeData([
                { name: 'menu' },
            ]);
        } catch (error) {
            alert('server side error!')
            // handle error;
        }
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
                <Button onClick={saveItem} variant="contained" color="primary">SAVE</Button>
            </div>
            <div style={{ height: "1000px", width: "auto" }}>
                <SortableTree
                    treeData={treeData}
                    onChange={(treeData) => setTreeData(treeData)}
                    generateNodeProps={(rowInfo) => ({
                        title: rowInfo.node.name,
                        buttons: [
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    verticalAlign: "middle",
                                }}
                                onClick={() => insertNode(rowInfo)}
                            >
                                <AddIcon />
                            </Button>,
                            rowInfo.treeIndex ? <Button
                                variant="contained"
                                color="secondary"
                                style={{
                                    verticalAlign: "middle",
                                }}
                                onClick={() => deleteNode(rowInfo)}
                            >
                                <HighlightOffIcon />
                            </Button> : null
                        ]
                    })}
                />
            </div>
        </>
    );

}

export default TreeEditor;