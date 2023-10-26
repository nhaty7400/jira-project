function Content(props: any) {
  const { data } = props;

  const renderCardTaskList = () => {
    return data.lstTask?.map((taskByStatus: any, index: any) => {
      return (
        <div
          key={index}
          className="card"
          style={{
            width: "25rem",
            height: "30rem",
            marginRight: "3rem",
            marginBottom: "2rem",
          }}
        >
          <div className="card-header fs-3">{taskByStatus.statusName}</div>
          <ul className="list-group list-group-flush">
            {taskByStatus.lstTaskDeTail.map((taskDetail: any, index: any) => {
              return (
                <li
                  style={{ padding: "1.5rem 2rem", marginBottom: "1rem" }}
                  key={index}
                  className="list-group-item"
                >
                  <p className="fs-4" style={{ fontWeight: "bold" }}>
                    {taskDetail.taskName}
                  </p>
                  <div
                    className="block"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="block-left text-danger fs-4">
                      {taskDetail.priorityTask.priority}
                    </div>
                    <div className="block-right">
                      <div className="avatar-group" style={{ display: "flex" }}>
                        {taskDetail.assigness.map((member: any, index: any) => {
                          return (
                            <div key={index} className="avatar">
                              <img
                                src={member.avatar}
                                alt=""
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return <div style={{ display: "flex",marginTop:"5rem" }}>{renderCardTaskList()}</div>;
}

export default Content;
