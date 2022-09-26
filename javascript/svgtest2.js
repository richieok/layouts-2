const rectBBox = document.querySelector('#rect_1');
const rectBoundingClientRect = document.querySelector('#rect_2');
const groupElement = document.querySelector('#group_text_1');

const bboxGroup = groupElement.getBBox();
rectBBox.setAttribute('x', bboxGroup.x);
rectBBox.setAttribute('y', bboxGroup.y);
rectBBox.setAttribute('width', bboxGroup.width);
rectBBox.setAttribute('height', bboxGroup.height);

const boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute('x', boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute('y', boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute('width', boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute('height', boundingClientRectGroup.height);
