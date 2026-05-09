// src/components/RoadmapCanvas.tsx
"use client";

import { useState, useMemo } from "react";
import { ReactFlow, Background, Controls, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "@dagrejs/dagre";
import CreateNodeButton from "./CreateNodeButton";
import RoadmapNode from "./nodes/RoadmapNode";
import AIGeneratorModal from "./AIGeneratorModal";

interface RoadmapCanvasProps {
  roadmapId: string;
  initialNodes: any[];
}

// Register the custom node type
const nodeTypes = {
  roadmapNode: RoadmapNode,
};

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = "TB",
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // Increased height in dagre for nodes with descriptions
  dagreGraph.setGraph({ rankdir: direction, nodesep: 70, ranksep: 100 });

  nodes.forEach((node) => {
    // Width and height adjusted for our custom node appearance
    dagreGraph.setNode(node.id, { width: 180, height: 80 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - 180 / 2,
        y: nodeWithPosition.y - 80 / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export default function RoadmapCanvas({
  roadmapId,
  initialNodes,
}: RoadmapCanvasProps) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedParentIds, setSelectedParentIds] = useState<string[]>([]);

  const { nodes, edges } = useMemo(() => {
    const rawNodes: Node[] = initialNodes.map((node) => ({
      id: node.id,
      type: "roadmapNode", // Use the custom type
      data: {
        label: node.title,
        description: node.description, // Pass description to the custom component
        isSelected: selectedParentIds.includes(node.id),
      },
      position: { x: 0, y: 0 },
    }));

    const rawEdges: Edge[] = [];
    initialNodes.forEach((node) => {
      node.parents.forEach((edge: any) => {
        rawEdges.push({
          id: `e-${edge.parentId}-${node.id}`,
          source: edge.parentId,
          target: node.id,
          animated: true,
          style: { stroke: "#34d399", strokeWidth: 2 },
        });
      });
    });

    return getLayoutedElements(rawNodes, rawEdges);
  }, [initialNodes, selectedParentIds]);

  const onNodeClick = (_: any, node: Node) => {
    if (!isSelecting) return;
    setSelectedParentIds((prev) =>
      prev.includes(node.id)
        ? prev.filter((p) => p !== node.id)
        : [...prev, node.id],
    );
  };

  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute top-4 right-4 z-10">
        <AIGeneratorModal roadmapId={roadmapId} />
        <CreateNodeButton
          roadmapId={roadmapId}
          isSelecting={isSelecting}
          setIsSelecting={setIsSelecting}
          selectedParentIds={selectedParentIds}
          setSelectedParentIds={setSelectedParentIds}
        />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes} // Apply custom node types
        onNodeClick={onNodeClick}
        fitView
        className="bg-transparent"
      >
        <Background color="rgba(255,255,255,0.08)" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
