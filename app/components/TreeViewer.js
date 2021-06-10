import Tree from 'react-d3-tree';

export default function TreeViewer({ item }) {
  return (
    <div id="treeWrapper" style={{ width: '100%', height: '100%'}}>
      <Tree 
      data={item} 
      />
    </div>
  );
}
