import Node from './shared/Node';
import Expression from './shared/Expression';
import Component from '../Component';
import TemplateScope from './shared/TemplateScope';
import { Node as ESTreeNode } from 'estree';
import { TemplateNode } from '../../interfaces';
import Element from './Element';
import InlineComponent from './InlineComponent';
import Window from './Window';
import Document from './Document';
export default class Binding extends Node {
    type: 'Binding';
    name: string;
    expression: Expression;
    raw_expression: ESTreeNode;
    is_contextual: boolean;
    is_readonly: boolean;
    constructor(component: Component, parent: Element | InlineComponent | Window | Document, scope: TemplateScope, info: TemplateNode);
    is_readonly_media_attribute(): boolean;
    validate_binding_rest_properties(scope: TemplateScope): void;
}
