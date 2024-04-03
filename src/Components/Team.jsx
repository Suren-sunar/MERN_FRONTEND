import { data } from "../restApi.json";

export const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nam dolorum quae quaerat aperiam. Quos, tempore laborum? Fugit
            necessitatibus, accusamus est hic laboriosam atque pariatur commodi
            quis velit rem quos! Soluta obcaecati, praesentium laboriosam quo
            provident ipsum quas aspernatur, corporis nihil sapiente voluptatem
            aliquam qui placeat perferendis sint inventore quam odio
            reprehenderit reiciendis sed. Facere, quas numquam. Cupiditate,
            sequi dolor. Magnam cumque, quod ex laborum ea sapiente ducimus
            ipsum magni doloribus impedit quam et debitis rerum. Voluptatibus
            eveniet optio vero neque rerum tenetur eos, voluptate, ipsa in
            voluptates nemo tempore! Deleniti aliquam itaque, modi porro eum
            delectus vel explicabo qui adipisci facere at assumenda repellendus
            ipsa eaque deserunt. Ipsa dolorum eos delectus, esse maxime expedita
            quo nesciunt cumque vel modi! Laudantium ducimus illum cupiditate
            dolorum facere incidunt, aperiam iusto autem laboriosam officia et
            officiis cum repudiandae unde reiciendis sit? Tempora ea officia
            fugit magni iusto nihil, vero recusandae sunt voluptas? Ipsam
            exercitationem rerum eligendi provident blanditiis soluta nisi ad
            cupiditate, amet modi quasi officia! Accusamus necessitatibus omnis
            nisi, iste odit corrupti recusandae, atque nostrum veniam ipsa illo.
            Dolorem, molestiae velit? Odit dolor dicta asperiores harum quos
            quaerat iste ullam velit. Minus voluptas molestiae vero ipsam
            ratione, dolor deserunt consectetur voluptate sunt accusantium neque
            dolores dolorum autem maiores nam unde. Repellendus. Consectetur
            maxime, rem enim sed amet perferendis? Quod maxime odio impedit
            adipisci, harum provident dolor quaerat libero beatae quis odit.
            Exercitationem dolore corporis, ratione voluptatem reiciendis
            expedita assumenda laborum accusantium?
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
