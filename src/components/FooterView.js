import React, { Component } from 'react';

export class FooterView extends Component {
	render() {
		return (
			<footer>
				<p className="boss">
					Sources:{' '}
					<a
						href="https://buildbackbetter.gov/the-transition/"
						target="_blank"
						rel="noreferrer"
					>
						The Transition{' '}
					</a>{' '}
					and{' '}
					<a
						href="https://www.whitehouse.gov/about-the-white-house/the-executive-branch/"
						target="_blank"
						rel="noreferrer"
					>
						The Executive Branch
					</a>
				</p>
			</footer>
		);
	}
}

export default FooterView;
