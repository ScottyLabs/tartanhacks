import topProjectData, { Project } from '../data/TopProjects';
import styles from './TopProjects.module.css';
import Crown from '../../public/svg/crown.svg';

function Link({ text, url }: { text: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="underline">
      {text}
    </a>
  );
}

function Block({ project, idx }: { project: Project; idx: number }) {
  // convert 1,2,3,... to a,b,c,... for table layout
  const area = String.fromCharCode(idx + 'a'.charCodeAt(0));
  return (
    <div
      className={`border p-2 rounded border-gray-600 flex flex-col justify-start items-center text-center`}
      style={{ gridArea: area }}
    >
      {/** first project is the winner */}
      {idx === 0 && <Crown />}
      <h1 className="text-xl text-yellow pb-4">{project.name}</h1>
      <div className="text-lg flex flex-col gap-2">
        <p className="pb-4"> {project.description} </p>
        {project.github && <Link text="View on Github" url={project.github} />}
        {project.slides && (
          <Link text="View presentation slides" url={project.slides} />
        )}
        {project.video && (
          <Link text="View presentation video" url={project.video} />
        )}
      </div>
      <p className="text-sm text-center text-gray-400 flex flex-row justify-center"></p>
    </div>
  );
}

export default function TopProjects() {
  /**
   * 
  return (
    <section className="py-16" id="top_projects">
      <div className="py-16 pb-40" id="top_projects">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-yellow">Top Projects</h3>
          <div className="text-lg px-6 flex flex-col items-center">
            <p className="max-w-xl pb-6 text-center">
              Thank you to all the hackers who participated in TartanHacks this
              year!
            </p>
            <p className="max-w-xl pb-8 text-center">
              There were many awesome projects, but these stood out and were
              selected as Top 5 for the Scott Krulcik Grand Prize:
            </p>
          </div>
          <div className="max-w-4xl m-auto">
            <div className={`grid gap-x-2 gap-y-2 ${styles.grid}`}>
            {
              topProjectData.map(
                (project, idx) =>
                  <Block 
                  project={project}
                  idx={idx}
                  key={idx}
                  />
              )
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
   */
  return (
    <section
      className="py-16 text-white m-auto font-bold text-center w-2/3"
      id="projects"
    >
      <h1 className="text-6xl mb-24">Top Projects</h1>
      <p className="text-4xl font-title">...Coming Soon...</p>
    </section>
  );
}
