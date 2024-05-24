import React from 'react';
import '../assets/css/commitee.css';
import members from "../assets/members"
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';

const Committee = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="main-content" ref={container}>
        <div className="paper-heading">
          <span className="red-text">COMMITTEE MEMBERS</span>
          <div className="line"></div>
        </div>

        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Patron</h1>
          <ProfileCard
            img={"/images/dilip-kr-baidya.jpg"}
            name="Prof. Dilip Kumar Baidya"
            aff={"Director, NIT Silchar"}
          />
        </div>
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Honorary Chair</h1>

          <ProfileCard
            img={"/images/profile_pic.png"}
            name="Coming Soon.."
            aff={"Coming Soon..."}
            style={{ maxWidth: "350px" }}
            link="https://scse.d.umn.edu/faculty-staff/desineni-subbaram-naidu"
          />
        </div>

        <div className="list">
          <h1 style={{ marginBottom: "-5px" }}>General Chair</h1>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/pps.jpg"}
              name={`Dr. Pravin P.S.`}
              aff={"NIT Silchar"}
              link={""}
            />
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name={`Dr. Sudipta Chakraborty`}
              aff={"NIT Silchar"}
              link={""}
            />
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name={`Coming Soon...`}
              aff={"Coming Soon..."}
              link={""}
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name={`Coming Soon...`}
              aff={"Coming Soon..."}
              link={""}
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name={`Coming Soon...`}
              aff={"Coming Soon..."}
              link={""}
            />
          </div>
        </div>
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Convenor</h1>
          <ProfileCard
            img={"/images/rd.jpg"}
            name="Dr. Rajdeep Dasgupta,"
            aff="NIT Silchar"
            link="http://www.nits.ac.in/departments/instru/eie.php"
          />
        </div>

        <div className="list">
          <h1>Organizing Chairs/Secretary</h1>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name="Coming Soon..."
              aff="Coming Soon.."
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name="Coming Soon..."
              aff="Coming Soon.."
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name="Coming Soon..."
              aff="Coming Soon.."
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/profile_pic.png"}
              name="Coming Soon..."
              aff="Coming Soon.."
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
          </div>
        </div>

        <div className="list">
          <h1>Technical Program Chairs</h1>
          <h3>
            <strong>Control & Robotics: </strong> Dr. Sudipta Chakraborty
          </h3>
          <h3>
            <strong>Signal Processing: </strong>Dr. Anup Kumar Sharma
          </h3>
          <h3>
            <strong>Communication System: </strong>Dr. Ranjay Hazra
          </h3>
          <h3>
            <strong>MEMS & VLSI: </strong>Dr. Shivendra Kumar Pandey
          </h3>
          <h3>
            <strong>AI & Soft Computing: </strong>Dr. Lalu Seban
          </h3>
          <h3>
            <strong>Sensors & Instrumentation: </strong>Dr. Sudarsan Sahoo
          </h3>
          <h3>
            <strong>Energy, Power Systems & Power Electronics: </strong>Dr.
            Munmun Khanra
          </h3>
        </div>

        <div className="list">
          <h1>Publication Chairs</h1>
          <h3>Dr. Ranjay Hazra, NIT Silchar</h3>
          <h3>Dr. Lalu Seban, NIT Silchar</h3>
          <h3>Dr. Koushik Guha, NIT Silchar</h3>
          <h3>Dr. Sumitra Sharma, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1>Publicity Chairs</h1>
          <h3>Dr. Shankar K., NIT Silchar</h3>
          <h3>Dr. Koena Mukherjee, NIT Silchar</h3>
          <h3>Dr. Wasim Arif, NIT Silchar</h3>
          <h3>Dr. Manas Kumar Bera, NIT Rourkela</h3>
        </div>

        <div className="list">
          <h1>Hospitality Chairs</h1>
          <h3>Dr. Sudarsan Sahoo, NIT Silchar</h3>
          <h3>Dr. Arun Kumar Sunaniya, NIT Silchar</h3>
          <h3>Dr. Sudipta Chakraborty, NIT Silchar</h3>
          <h3>Dr. Bipul Das, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1>Finance Chairs</h1>
          <h3>Dr. Vipin Chandra Pal, NIT Silchar</h3>
          <h3>Dr. Rajdeep Dasgupta, NIT Silchar</h3>
          <h3>Dr. Dipankar Bhanja, NIT Silchar</h3>
          <h3>Mr. Pulak Nath, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1>Registration Committee</h1>
          <h3>Dr. Rajdeep Dasgupta, NIT Silchar</h3>
          <h3>Dr. Jupitara Hazarika, NIT Silchar</h3>
          <h3>Dr. Pravin P.S., NIT Silchar</h3>
          <h3>Dr. Anup Kumar Sharma, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1>Website & Online Platform Commitee</h1>
          <h3>Dr. Pravin P.S., NIT Silchar</h3>
          <h3>Dr. Ranjay Razra, NIT Silchar</h3>
          <h3>Dr. Sudipta Chakraborty, NIT Silchar</h3>
          <h3>Dr. Naresh Babu, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1>Sponsorship</h1>
          <h3>Dr. Ranjay Hazra, NIT Silchar</h3>
          <h3>Dr. Vipin Chandra Pal, NIT Silchar</h3>
          <h3>Dr. Bipul Das, NIT Silchar</h3>
          <h3>Dr. Shankar K., NIT Silchar</h3>
        </div>

        <div className="list">
          <h1 className="mtb-2">Technical Program Committee </h1>
          <table className="committeeTable mb-4">
            <tr>
              <th>S. No.</th>
              <th>Name of TPC Member</th>
              <th>Affiliation</th>
            </tr>
            {members.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.member}</td>
                <td>{el.affiliation}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Committee;
