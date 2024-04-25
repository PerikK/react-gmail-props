import { useState } from 'react'

export default function LeftMenu(props) {
    const [hideRead, setHideRead] = useState(false)
    const [currentTab, setCurrentTab] = useState('inbox')

    let filteredEmails = props.emails

    // const getReadEmails = props.emails => emails.filter(email => !email.read)
    // const getStarredEmails = emails => emails.filter(email => email.starred)

    const unreadEmails = props.emails.filter(email => !email.read)
    console.log(unreadEmails);
    const starredEmails = props.emails.filter(email => email.starred)


    if (currentTab === 'starred') {
        filteredEmails = starredEmails
        console.log(filteredEmails);
    }
    
    if (hideRead) filteredEmails = unreadEmails
    

    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li
                    className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('inbox')}
                >
                    <span className="label">Inbox</span>
                    <span className="count">{unreadEmails.length}</span>
                </li>
                <li
                    className={`item ${currentTab === 'starred' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('starred')}
                >
                    <span className="label">Starred</span>
                    <span className="count">{starredEmails.length}</span>
                </li>

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                    id="hide-read"
                    type="checkbox"
                    checked={hideRead}
                    onChange={ () => { setHideRead(!hideRead) } }
                    // onChange={e => setHideRead(e.target.checked)}
                    />
                </li>
            </ul>
        </nav>

        
    )
}



