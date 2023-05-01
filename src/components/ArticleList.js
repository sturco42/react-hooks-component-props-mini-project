import Article from "./Article"
const ArticleList = ({ posts}) => {

    const mappedUserArticles = posts.map(post => <Article key={post.id} {...post}/>)

    return (<main>
        {mappedUserArticles}
        </main>)
}

export default ArticleList