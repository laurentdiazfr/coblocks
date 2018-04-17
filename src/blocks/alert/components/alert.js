/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Alert extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			className,
		} = this.props;

		const {
			align,
			backgroundColor,
			borderColor,
			textAlign,
			textColor,
			title,
		} = attributes;

		return (
			<div
				className={ classnames(
					className,
					`align${ align }`
				) }
				style={ {
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					color: textColor,
					textAlign: textAlign,
				} }
			>
				{ this.props.children }
			</div>
		);
	}
}
