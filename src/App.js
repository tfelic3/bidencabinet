import React, { Component} from 'react';
import Cabinet from './components/Cabinet';
import { HashRouter as Router, Route } from 'react-router-dom';
import CabinetView from './components/CabinetView';
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';
import CarouselView from './components/CarouselView';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
constructor(props){
	super(props)
	
	this.state = {
		
		candidates : [
			{
				title: 'President',
				name: 'Joe Biden',
				description:'The president heads the US government. He is also commander-in-chief of the armed forces.',
				previousHolder: 'Donald Trump',
				imgPath: 'img/biden4x4.png',					
				id: 0
			},

			{
				title: 'Vice President',
				name: 'Kamala Harris',
				description: 'The vice president is second in command. The vice president assumes the role of president if the president is unable to serve.',
				previousHolder: 'Mike Pence',
				imgPath: 'img/harris4x4.png',
				id: 1,
			},

			{
				title: 'Secretary of State',
				name: 'Antony Blinken',
				description:
					'The secretary of state serves as the president’s top foreign policy adviser. Among duties, the secretary conducts negotiations related to foreign affairs and issues passports to American citizens.',
					previousHolder: 'Michael Pompeo',
					imgPath: 'img/blinken4x4.png',
				id: 2,
			},

			{
				title: 'Secretary of the Treasury',
				name: 'Janet Yellen',
				description:
					'The secretary of treasury manages the country’s economic and fiscal policy. Duties of the department include enforcing tax and tariff law and producing currency.',
				previousHolder: 'Steven Mnuchin',
					imgPath: 'img/yellen4x4.png',
				id: 3
				,
			},

			{
				title: 'Secretary of Defense',
				name: 'Gen. Lloyd Austin',
				description:
					'The secretary of defense leads the Department of Defense which creates policy and oversees the US military. The department’s headquarters is at the Pentagon.',
					previousHolder: 'Christopher C. Miller',
					imgPath: 'img/austin4x4.png',
				id: 4,
			},

			{
				title: 'Attorney General',
				name: 'Judge Merrick Garland',
				description:
					'The attorney general oversees the Department of Justice (DOJ). The attorney general represents the country in legal matters and enforces the country’s laws.',
				previousHolder: 'William Barr',
					imgPath: 'img/garland4x4.png',
				id: 5,
			},

			{
				title: 'Secretary of the Interior',
				name: 'Deb Haaland',
				description:
					'This secretary leads the department which protects the country’s natural resources and provides federal assistance to US territories and Native American and Alaskan tribes.',
				previousHolder: 'David Bernhardt',
					imgPath: 'img/haaland4x4.png',
				id: 6,
			},

			{
				title: 'Secretary of Agriculture',
				name: 'Tom Vilsack',
				description:
					'The secretary leads the department responsible for creating and implementing the country’s agriculture, farming and food policy.',
				previousHolder: 'Sonny Perdue',
					imgPath: 'img/vilsack4x4.png',
				id: 7,
			},

			{
				title: 'Secretary of Commerce',
				name: 'Gina Raimondo',
				description:
					'This secretary leads the department which fosters economic development and technological innovation. The department helps the US economy grow.',
					previousHolder:'Wilbur Ross',
					imgPath: 'img/gina4x4.png',
				id: 8,
			},

			{
				title: 'Secretary of Labor',
				name: 'Marty Walsh',
				description:
					'The secretary of labor leads the department which oversees federal programs protecting US workers, job seekers and retirees.',
					previousHolder: 'Eugene Scalia',
				imgPath: 'img/marty4x4.png',
				id: 9,
			},

			{
				title: 'Secretary of Health & Human Services',
				name: 'Xavier Becerra',
				description:
					'This secretary runs the department that protects the health of Americans by providing efficient human services. The department also oversees the National Institutes of Health, the Food and Drug Administration, and the Centers for Disease Control.',
				previousHolder: 'Alex Azar',
					imgPath: 'img/becerra4x4.png',
				id: 10,
			},

			{
				title: 'Secretary of Housing & Urban Development',
				name: 'Marcia Fudge',
				description:
					'This secretary oversees the department which creates policies that address the country’s housing needs and enforces fair housing laws.  ',
				previousHolder: 'Ben Carson',
					imgPath: 'img/fudge4x4.png',
				id: 11,
			},

			{
				title: 'Secretary of Transportation',
				name: 'Pete Buttigieg',
				description:
					'The secretary of transportation supervises the department which plans and implements the nation’s transportation system. The department also sets safety regulations for all major modes of transportation.',
				previousHolder: 'Elaine Chao',
					imgPath: 'img/buttigieg4x4.png',
				id: 12,
			},

			{
				title: 'Secretary of Energy',
				name: 'Jennifer Granholm',
				description:
					'The secretary oversees the department which manages the country’s nuclear infrastructure and supervises its energy policy.',
			previousHolder: 'Dan Brouillette',
					imgPath: 'img/granholm4x4.png',
				id: 13,
			},

			{
				title: 'Secretary of Education',
				name: 'Miguel Cardona',
				description:
					'This secretary administers the department which supports the education of children and adults in schools and colleges throughout the country.',
	previousHolder: 'Elisabeth Prince DeVos',
					imgPath: 'img/cardona4x4.png',
				id: 14,
			},
			{
				title: 'Secretary of Homeland Security',
				name: 'Alejandro Mayorkas',
				description:
					'The secretary runs the department which ensures the safety and security of the US. The US government created the department in the aftermath of the Sept. 11 terrorist attacks. ',
				previousHolder: 'Chad Wolf',
					imgPath: 'img/mayorkas4x4.png',
				id: 15,
			},

			{
				title: 'Secretary of Veterans Affairs',
				name: 'Denis McDonough',
				description:
					'This secretary runs the Department of Veterans Affairs which provides programs benefiting veterans and members of their families.',
				previousHolder: 'Robert Wilkie',   
					imgPath: 'img/mcdonough4x4.png',
				id: 16,
			}
		],
		idx: 0,
		newArray: []
		
		

	}


}	

nextCandidate = () => {
	this.setState({ idx: (this.state.idx + 1) % this.state.candidates.length });
	console.log(this.state.candidates[this.state.idx])


}

previousCandidate = () => {
	this.setState({ idx: (this.state.idx - 1) % this.state.candidates.length });
	console.log(this.state.candidates[this.state.idx])


}





			

	render() {
		document.title = 'Biden Cabinet Nominees'
      
		return (
			<Router>
				<Route exact path="/" render={() => <HeaderView />} />
				
				
			

					<Container className="grid" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/seal.svg'})`,
			

              }}
					
					>
						<Route
							exact
							path="/"
							render={() => <Cabinet candidates={this.state.candidates} />
					
							
						}
						
						/>
				

						<Route
							exact
							path="/cabinet/:title"
							render={({ match }) => (
								<CabinetView 
									candidates={this.state.candidates}
									nextCandidate= {this.nextCandidate}
									previousCandidate = {this.previousCandidate}
									idx = {this.state.idx}
									newArray = {this.state.newArray}
									
								

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
