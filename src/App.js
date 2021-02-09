import React, { Component } from 'react';
import Cabinet from './components/Cabinet';
import { HashRouter as Router, Route } from 'react-router-dom';
import CabinetView from './components/CabinetView';
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			candidates: [
				{
					title: "President" ,
					name: 'Joe Biden',
					description:
						'The president heads the US government. He is also commander-in-chief of the armed forces.',
					previousHolder: 'Donald Trump',
					isConfirmed: 'Elected',
					imgPath: 'img/biden4x4.png',
					id: 0,
				},

				{
					title: 'Vice President',
					name: 'Kamala Harris',
					description:
						'The vice president is second in command. The vice president assumes the role of president if the president is unable to serve.',
					previousHolder: 'Mike Pence',
					isConfirmed: 'Elected',
					imgPath: 'img/harris4x4.png',
					id: 1,
				},

				{
					title: 'Secretary of State',
					name: 'Antony Blinken ',
					description:
						'This secretary oversees America’s diplomatic corps, directs foreign policies for the president and serves as a top foreign affairs adviser.',
					previousHolder: 'Michael Pompeo',
					isConfirmed: 'Confirmed',
					imgPath: 'img/blinken4x4.png',
					id: 2,
				},

				{
					title: 'Secretary of the Treasury',
					name: 'Janet Yellen',
					description:
						'This secretary oversees the US economy and financial systems.',
					previousHolder: 'Steven Mnuchin',
					isConfirmed: 'Confirmed',
					imgPath: 'img/yellen4x4.png',
					id: 3,
				},

				{
					title: 'Secretary of Defense',
					name: 'Gen. Lloyd Austin',
					description:
						'This secretary oversees the military and serves as a primary adviser to the president on defense policies for the nation.',
					previousHolder: 'Christopher C. Miller',
					isConfirmed: 'Confirmed',
					imgPath: 'img/austin4x4.png',
					id: 4,
				},

				{
					title: 'Attorney General',
					name: 'Merrick Garland',
					description:
						"This attorney general is the nation's chief law enforcement official of the federal government who oversees the Department of Justice.",
					previousHolder: 'William Barr',
					isConfirmed: 'Pending',
					imgPath: 'img/garland4x4.png',
					id: 5,
				},

				{
					title: 'Secretary of the Interior',
					name: 'Deb Haaland',
					description:
						"This secretary is responsible for conservation and management of the nation's national resources.",
					previousHolder: 'David Bernhardt',
					isConfirmed: 'Pending',
					imgPath: 'img/haaland4x4.png',
					id: 6,
				},

				{
					title: 'Secretary of Agriculture',
					name: 'Tom Vilsack',
					description:
						'This secretary oversees policy regulating food production and safety, farming and rural development.  ',
					previousHolder: 'Sonny Perdue',
					isConfirmed: 'Pending',
					imgPath: 'img/vilsack4x4.png',
					id: 7,
				},

				{
					title: 'Secretary of Commerce',
					name: 'Gina Raimondo',
					description:
						'This secretary directs  trade policies and negotiations and manages data for, among other things, weather, fishing and the US Census.',
					previousHolder: 'Wilbur Ross',
					isConfirmed: 'Pending',
					imgPath: 'img/gina4x4.png',
					id: 8,
				},

				{
					title: 'Secretary of Labor',
					name: 'Marty Walsh',
					description:
						'This secretary  oversees policies on wages and benefits as well as working conditions and rights.',
					previousHolder: 'Eugene Scalia',
					isConfirmed: 'Pending',
					imgPath: 'img/marty4x4.png',
					id: 9,
				},

				{
					title: 'Secretary of Health & Human Services',
					name: 'Xavier Becerra',
					description:
						'This secretary is in charge of health policy and oversees Medicaid, Medicare and the Centers for Disease Control and Prevention.',
					previousHolder: 'Alex Azar',
					isConfirmed: 'Pending',
					imgPath: 'img/becerra4x4.png',
					id: 10,
				},

				{
					title: 'Secretary of Housing & Urban Development',
					name: 'Marcia Fudge',
					description:
						'This secretary manages federal housing and lending programs for home buyers.',
					previousHolder: 'Ben Carson',
					isConfirmed: 'Pending',
					imgPath: 'img/fudge4x4.png',
					id: 11,
				},

				{
					title: 'Secretary of Transportation',
					name: 'Pete Buttigieg',
					description:
						'This secretary is in charge of policy related to transportation safety and efficiency.',
					previousHolder: 'Elaine Chao',
					isConfirmed: 'Confirmed',
					imgPath: 'img/buttigieg4x4.png',
					id: 12,
				},

				{
					title: 'Secretary of Energy',
					name: 'Jennifer Granholm',
					description:
						'This secretary oversees policies and regulations related to energy, fuel sources, the environment and nuclear technology development.',
					previousHolder: 'Dan Brouillette',
					isConfirmed: 'Pending',
					imgPath: 'img/granholm4x4.png',
					id: 13,
				},

				{
					title: 'Secretary of Education',
					name: 'Miguel Cardona',
					description:
						"Oversight of federal educational programs and policy, federal student loans and student rights falls under this secretary's purview.",
					previousHolder: 'Elisabeth Prince DeVos',
					isConfirmed: 'Pending',
					imgPath: 'img/cardona4x4.png',
					id: 14,
				},
				{
					title: 'Secretary of Homeland Security',
					name: 'Alejandro Mayorkas',
					description:
						'This secretary runs the department which ensures the safety and security of the US. The US government created the department in the aftermath of the Sept. 11 terrorist attacks. ',
					previousHolder: 'Chad Wolf',
					isConfirmed: 'Confirmed',
					imgPath: 'img/mayorkas4x4.png',
					id: 15,
				},

				{
					title: 'Secretary of Veterans Affairs',
					name: 'Denis McDonough',
					description:
						'This secretary runs the Department of Veterans Affairs which provides programs benefiting veterans and members of their families.',
					previousHolder: 'Robert Wilkie',
					isConfirmed: 'Confirmed',
					imgPath: 'img/mcdonough4x4.png',
					id: 16,
				},
			],
			idx: 0,
			newArray: [],
		};
	}

	nextCandidate = () => {
		this.setState({ idx: (this.state.idx + 1) % this.state.candidates.length });
		console.log(this.state.candidates[this.state.idx]);
	};

	previousCandidate = () => {
		this.setState({ idx: (this.state.idx - 1) % this.state.candidates.length });
		console.log(this.state.candidates[this.state.idx]);
	};

	render() {
		document.title = 'Biden Cabinet Nominees';

		return (
			<Router>
				<Route exact path="/" render={() => <HeaderView />} />

				<Container
					className="grid"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL + '/img/seal.svg'})`,
					}}
				>
					<Route
						exact
						path="/"
						render={() => <Cabinet candidates={this.state.candidates} />}
					/>

					<Route
						exact
						path="/cabinet/:title"
						render={({ match }) => (
							<CabinetView
								candidates={this.state.candidates}
								nextCandidate={this.nextCandidate}
								previousCandidate={this.previousCandidate}
								idx={this.state.idx}
								newArray={this.state.newArray}
								cabinet={this.state.candidates.find(
									(m) => m.title === match.params.title
								)}
							/>
						)}
					/>
				</Container>
				<Route exact path="/" render={() => <FooterView />} />
			</Router>
		);
	}
}
export default App;
