export default function Home() {
  return (
    <main className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>序号</th>
              <th>单词</th>
              <th>词性</th>
              <th>例句</th>
              <th>中文解释</th>
              <th>Lesson</th>
              <th>所属教材</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>man</td>
              <td>n.</td>
              <td>The man is tall</td>
              <td>男人</td>
              <td>Lesson 1</td>
              <td>新概念1</td>
              <td>
                <button className="btn btn-error btn-xs">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
