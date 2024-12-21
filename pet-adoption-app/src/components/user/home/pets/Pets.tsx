import React from 'react'

function Pets() {
  return (
    <>
    <h1>Pets</h1>
    <section className="tablegroup">
        <table className="table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Picture</th>
                    <th>Breed</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Condition</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/golden.jpg" alt="Golden Retriever"/></td>
                    <td>Golden Retriever</td>
                    <td>Buddy</td>
                    <td>3</td>
                    <td>Good</td>
                    <td>F</td>

                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/persian-cat-.webp" alt="Persian Cat" /></td>
                    <td>Persian Cat</td>
                    <td>Whiskers</td>
                    <td>2</td>
                    <td>Good</td>
                    <td>M</td>

                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/maccao.webp" alt="Parrot" /></td>
                    <td>Parrot</td>
                    <td>Polly</td>
                    <td>1</td>
                    <td>Good</td>
                    <td>M</td>

                </tr>
            </tbody>
        </table>
    </section>
    </>
  )
}

export default Pets