import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRemove, postSave, postList } from "../../_actions/post_action";
import ReactPaginate from "react-paginate";
import './PostList.css'
function PostList({ match }) {
  const [currentList, setCurrentList] = useState();
  const [listPerPage, setListPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(async () => {
    const initialList = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data); // api로 데이터 가져오기
    dispatch(postList(initialList));
  }, []);
  const { posts } = useSelector((state) => state.post);

  
  useEffect(() => {
    const sliced = posts.slice(firstIndex, lastIndex);
    setCurrentList(sliced);
  }, [currentPage]);

  const lastIndex = currentPage * listPerPage; // 10, 20, 30
  const firstIndex = currentPage * listPerPage - listPerPage; // 1, 11, 21..

  return (
    <div>
      {/* header, menubox component */}
      <table>
        <TableHeader />
        <TableBody
          currentList={posts.slice(firstIndex, lastIndex)}
          match={match}
        />
      </table>
        <ReactPaginate
          pageCount={Math.ceil(posts.length/ 10)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          breakLabel={""}
          previousLabel={"이전"}
          nextLabel={"다음"}
          onPageChange={(e) => setCurrentPage(e.selected + 1)}
          containerClassName={"pagination-ul"}
          activeClassName={"currentPage"}
          previousClassName={"pageLabel-btn"}
          nextClassName={"pageLabel-btn"}
        />
    </div>
  );
}

export default PostList;

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>번호</th>
        <th>말머리</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>작성일</th>
        <th>조회</th>
      </tr>
    </thead>
  );
}

function TableBody({ currentList, match }) {


  return (
    <tbody>
      {currentList ? (
        currentList.map((list, index) => {

          return (
            <tr key={index}>
              <td>{list.id}</td>

              <td>{list.title.slice(0,4)}</td>
              <td>
                <Link to={`${match.path}/${list.id}`}>{list.id}</Link>
                {/* <a href={`${match.path}/${list.id}`}>aa</a>  */}
              </td>
            </tr>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </tbody>
  );
}

// function TableBody({ match, id, title, body, currentPage }) {
//   return (
//     <tr>
//       <td>{id}</td>

//       <td>{title.slice(0, 20)}</td>
//       <td>
//         <Link to={`${match.url}/${id}`}>{body.slice(0, 20)}</Link>
//       </td>
//     </tr>
//   );
// }

/* <tbody>
          {currentList
            ? currentList.map((list, index) => {
                return (
                  <TableBody
                    key={index}
                    id={list.id}
                    title={list.title}
                    body={list.body}
                    match={match}
                  />
                );
              })
            : "isLoading"}
        </tbody> */

//   <tr key={index}>
//     <td>{list.id}</td>

//     <td>{list.title.slice(0, 20)}</td>
//     <td>
//       <Link to={`${match.url}/${list.id}`}>
//         {list.body.slice(0, 20)}
//       </Link>
//     </td>
//   </tr>
