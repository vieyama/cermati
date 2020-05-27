import React from 'react'
import { Card, GetLatest } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faListAlt } from '@fortawesome/free-regular-svg-icons'
import { faPaintBrush, faCubes, faBullhorn, faChartLine } from '@fortawesome/free-solid-svg-icons'

const dataHighlights = [
    {
        title: 'Consult',
        desc:
            'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
        icon: <FontAwesomeIcon icon={faComments} />,
    },
    {
        title: 'Design',
        desc:
            'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
        icon: <FontAwesomeIcon icon={faPaintBrush} />,
    },
    {
        title: 'Develop',
        desc:
            'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
        icon: <FontAwesomeIcon icon={faCubes} />,
    },
    {
        title: 'Marketing',
        desc:
            'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
        icon: <FontAwesomeIcon icon={faBullhorn} />,
    },
    {
        title: 'Manage',
        desc:
            'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
        icon: <FontAwesomeIcon icon={faListAlt} />,
    },
    {
        title: 'Evolve',
        desc:
            'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
        icon: <FontAwesomeIcon icon={faChartLine} />,
    },
]

export default function Highlights() {
    return (
        <React.Fragment>
            <div className='highlight'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h3 className='font-weight-bold'>
                                How Can I Help You?
                            </h3>
                            <p className='highlights-1'>
                                Our work then targeted, best practices outcomes
                                social innovation synergy. Venture philanthropy,
                                revolutionary inclusive policymaker relief.
                                User-centered program areas scale.
                            </p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <Card dataHighlights={dataHighlights} />
                    </div>
                </div>
            </div>
            <GetLatest />
        </React.Fragment>
    )
}
