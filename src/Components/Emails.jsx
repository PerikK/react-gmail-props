import Email from "./Email";

export default function Emails({filteredEmails, setEmails}) {
    return (
        <main className='Emails'>
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email key={index} email={email} setEmails={setEmails} />
                ))}
            </ul>
        </main>
    );
}