
/*var data = [
  {id:1, author:'PPPEEETEERR', comment='LUUUUUUUUUUNAAAAAAAAAA'},
  {id:2, author:'RRRRRRRRREAECTTTTT', comment='LOOOOOOOOOOOSERRRRRRRR'}
];*/

class CommentBox extends React.Component {
  render(){
    return(
      <div className="commentbox">
        <h1>HEELOLOL</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
};

class CommentList extends React.Component{
  render(){

    return(
      <div className="commentList">
        <Comment author="PPPEEETEERR">LUUUUUUUUUUNAAAAAAAAAA</Comment>
        <Comment author="RRRRRRRRREAECTTTTT">LOOOOOOOOOOOSERRRRRRRR</Comment>
      </div>
    );
  }
};

class Comment extends React.Component {

  render(){
    var md = new Remarkable();
    var raw = md.render(this.props.children.toString());
    var raww = {__html:raw};
    return(
      <div className="comment">
        <h2 className="commenter">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={raww} />
      </div>
    );
  }
};

class CommentForm extends React.Component{
  render(){
    return(
      <div className="commentForm">
        HELOOOOOLLLLLL FORMMMMM
      </div>
    );
  }
};

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
