import './movie.css';

export default function MovieDetail() {
  const movie = {
    title: "Inception",
    originalTitle: "Inception",
    genres: ["Action", "Science Fiction", "Adventure"],
    description:
      "Dom Cobb là một kẻ trộm bậc thầy – chuyên đánh cắp những bí mật giá trị từ sâu thẳm tiềm thức của con người khi họ đang mơ. Kỹ năng hiếm có này khiến Cobb trở thành tay chơi được săn đón trong thế giới gián điệp công nghệ. Tuy nhiên, điều đó cũng khiến anh trở thành kẻ tội phạm và mất tất cả những gì từng yêu thương.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
    ],
    releaseDate: "2010-07-16",
    duration: "148 phút",
    language: "Tiếng Anh",
    country: "Mỹ",
    rating: "8.8/10",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  };

  return (
    <div className="movie-detail-container">
      <div className="poster">
        <img src={movie.posterUrl} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <h3>Tên gốc: {movie.originalTitle}</h3>
        <p><strong>Thể loại:</strong> {movie.genres.join(", ")}</p>
        <p><strong>Đạo diễn:</strong> {movie.director}</p>
        <p><strong>Diễn viên:</strong> {movie.cast.join(", ")}</p>
        <p><strong>Ngày phát hành:</strong> {movie.releaseDate}</p>
        <p><strong>Thời lượng:</strong> {movie.duration}</p>
        <p><strong>Ngôn ngữ:</strong> {movie.language}</p>
        <p><strong>Quốc gia:</strong> {movie.country}</p>
        <p><strong>Đánh giá:</strong> {movie.rating}</p>
        <p><strong>Nội dung:</strong> {movie.description}</p>

        <div className="trailer">
          <h4>Trailer</h4>
          <iframe
            width="100%"
            height="315"
            src={movie.trailerUrl}
            title="Trailer phim"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
