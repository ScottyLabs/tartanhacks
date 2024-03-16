/**
 * Wrap an element to inject props
 */
export default function wrapElement(element: JSX.Element) {
	return function PropIcon(props: any) {
		return <element.type {...element.props} {...props} />;
	};
}
