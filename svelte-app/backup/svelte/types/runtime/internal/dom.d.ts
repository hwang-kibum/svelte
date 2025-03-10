import { ResizeObserverSingleton } from './ResizeObserverSingleton';
export declare function start_hydrating(): void;
export declare function end_hydrating(): void;
declare type NodeEx = Node & {
    claim_order?: number;
    hydrate_init?: true;
    actual_end_child?: NodeEx;
    childNodes: NodeListOf<NodeEx>;
};
export declare function append(target: Node, node: Node): void;
export declare function append_styles(target: Node, style_sheet_id: string, styles: string): void;
export declare function get_root_for_style(node: Node): ShadowRoot | Document;
export declare function append_empty_stylesheet(node: Node): CSSStyleSheet;
export declare function append_hydration(target: NodeEx, node: NodeEx): void;
export declare function insert(target: Node, node: Node, anchor?: Node): void;
export declare function insert_hydration(target: NodeEx, node: NodeEx, anchor?: NodeEx): void;
export declare function detach(node: Node): void;
export declare function destroy_each(iterations: any, detaching: any): void;
export declare function element<K extends keyof HTMLElementTagNameMap>(name: K): HTMLElementTagNameMap[K];
export declare function element_is<K extends keyof HTMLElementTagNameMap>(name: K, is: string): HTMLElementTagNameMap[K];
export declare function object_without_properties<T, K extends keyof T>(obj: T, exclude: K[]): Pick<T, Exclude<keyof T, K>>;
export declare function svg_element<K extends keyof SVGElementTagNameMap>(name: K): SVGElement;
export declare function text(data: string): Text;
export declare function space(): Text;
export declare function empty(): Text;
export declare function comment(content: string): Comment;
export declare function listen(node: EventTarget, event: string, handler: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | EventListenerOptions): () => void;
export declare function prevent_default(fn: any): (event: any) => any;
export declare function stop_propagation(fn: any): (event: any) => any;
export declare function stop_immediate_propagation(fn: any): (event: any) => any;
export declare function self(fn: any): (event: any) => void;
export declare function trusted(fn: any): (event: any) => void;
export declare function attr(node: Element, attribute: string, value?: string): void;
export declare function set_attributes(node: Element & ElementCSSInlineStyle, attributes: {
    [x: string]: string;
}): void;
export declare function set_svg_attributes(node: Element & ElementCSSInlineStyle, attributes: {
    [x: string]: string;
}): void;
export declare function set_custom_element_data_map(node: any, data_map: Record<string, unknown>): void;
export declare function set_custom_element_data(node: any, prop: any, value: any): void;
export declare function set_dynamic_element_data(tag: string): typeof set_custom_element_data_map;
export declare function xlink_attr(node: any, attribute: any, value: any): void;
export declare function get_binding_group_value(group: any, __value: any, checked: any): unknown[];
export declare function init_binding_group(group: HTMLInputElement[]): {
    p(...inputs: HTMLInputElement[]): void;
    r(): void;
};
export declare function init_binding_group_dynamic(group: any, indexes: number[]): {
    u(new_indexes: number[]): void;
    p(...inputs: HTMLInputElement[]): void;
    r: () => void;
};
export declare function to_number(value: any): number;
export declare function time_ranges_to_array(ranges: any): any[];
declare type ChildNodeEx = ChildNode & NodeEx;
declare type ChildNodeArray = ChildNodeEx[] & {
    claim_info?: {
        /**
         * The index of the last claimed element
         */
        last_index: number;
        /**
         * The total number of elements claimed
         */
        total_claimed: number;
    };
};
export declare function children(element: Element): ChildNode[];
export declare function claim_element(nodes: ChildNodeArray, name: string, attributes: {
    [key: string]: boolean;
}): Element | SVGElement;
export declare function claim_svg_element(nodes: ChildNodeArray, name: string, attributes: {
    [key: string]: boolean;
}): Element | SVGElement;
export declare function claim_text(nodes: ChildNodeArray, data: any): Text;
export declare function claim_space(nodes: any): Text;
export declare function claim_comment(nodes: ChildNodeArray, data: any): Comment;
export declare function claim_html_tag(nodes: any, is_svg: boolean): HtmlTagHydration;
export declare function set_data(text: Text, data: unknown): void;
export declare function set_data_contenteditable(text: Text, data: unknown): void;
export declare function set_data_maybe_contenteditable(text: Text, data: unknown, attr_value: string): void;
export declare function set_input_value(input: any, value: any): void;
export declare function set_input_type(input: any, type: any): void;
export declare function set_style(node: any, key: any, value: any, important: any): void;
export declare function select_option(select: any, value: any, mounting: any): void;
export declare function select_options(select: any, value: any): void;
export declare function select_value(select: any): any;
export declare function select_multiple_value(select: any): any;
export declare function is_crossorigin(): boolean;
export declare function add_iframe_resize_listener(node: HTMLElement, fn: () => void): () => void;
export declare const resize_observer_content_box: ResizeObserverSingleton;
export declare const resize_observer_border_box: ResizeObserverSingleton;
export declare const resize_observer_device_pixel_content_box: ResizeObserverSingleton;
export { ResizeObserverSingleton };
export declare function toggle_class(element: any, name: any, toggle: any): void;
export declare function custom_event<T = any>(type: string, detail?: T, { bubbles, cancelable }?: {
    bubbles?: boolean;
    cancelable?: boolean;
}): CustomEvent<T>;
export declare function query_selector_all(selector: string, parent?: HTMLElement): ChildNodeArray;
export declare function head_selector(nodeId: string, head: HTMLElement): any[];
export declare class HtmlTag {
    private is_svg;
    e: HTMLElement | SVGElement;
    n: ChildNode[];
    t: HTMLElement | SVGElement | DocumentFragment;
    a: HTMLElement | SVGElement;
    constructor(is_svg?: boolean);
    c(html: string): void;
    m(html: string, target: HTMLElement | SVGElement, anchor?: HTMLElement | SVGElement): void;
    h(html: string): void;
    i(anchor: any): void;
    p(html: string): void;
    d(): void;
}
export declare class HtmlTagHydration extends HtmlTag {
    l: ChildNode[] | void;
    constructor(claimed_nodes?: ChildNode[], is_svg?: boolean);
    c(html: string): void;
    i(anchor: any): void;
}
export declare function attribute_to_object(attributes: NamedNodeMap): {};
export declare function get_custom_elements_slots(element: HTMLElement): {};
export declare function construct_svelte_component(component: any, props: any): any;
