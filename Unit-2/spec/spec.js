describe('Unit-2', function() {



    // it('find BOOYAH', function() {
    //     browser.get('http://localhost:8000');
    //     var booyahTest = element.all(by.tagName('h1'));
    //     expect( booyahTest.get(0).getText() ).toContain('BOOYAH');
    // });

    it('should include input box for movie title and search button', function() {
        browser.get('http://localhost:8000');
        var inputBoxMovieTitle = element(by.css('#searchInput'));
        var searchButton = element(by.css('#searchButton'));

        expect ( inputBoxMovieTitle.getTagName() ).toBe('input');
        expect ( searchButton.getTagName()  ).toBe('button');
    });



    it('should display movies of same title as input box', function() {
        browser.get('http://localhost:8000');
        var inputBoxMovieTitle = element(by.css('#searchInput'));
        inputBoxMovieTitle.sendKeys('Terminator');

        var searchButton = element(by.css('#searchButton'));
        searchButton.click();

        var movieList = element.all(by.repeater('movie in omdb.movieData'));
        expect(movieList.count()).toBe(10);
        expect(movieList.first().getText()  ).toBe('Terminator 2: Judgment Day');

    });




    it('should open a show page for clicked movie', function() {

        browser.get('http://localhost:8000/');

        var inputBoxMovieTitle = element(by.css('#searchInput'));
        inputBoxMovieTitle.sendKeys('Baby\'s Day Out');

        var searchButton = element(by.css('#searchButton'));
        searchButton.click();

        var firstMovie = element.all(by.repeater('movie in omdb.movieData').row(0).column('movie.Title'));



        firstMovie.click();
        expect(browser.getCurrentUrl()  ).toContain('tt0109190');

    });




    it('should have movie details and image on the show page', function(){
        browser.get('http://localhost:8000/#/tt0109190');
        var moviePlot = element(by.css('#plot'));
        var releaseDate = element(by.css('#date'));
        var image = element(by.tagName('img'));

        expect(moviePlot.getText() ).toContain('1994');
        expect(moviePlot.getText()  ).toContain('Baby Bink');
        expect(image.getAttribute('src')).toEqual('https://images-na.ssl-images-amazon.com/images/M/MV5BMzI3NmQ1ZDUtZWQ1My00NzlkLWE5OGQtZjZkYWJmYzYwY2QxXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg');





        // expect( element(by.tagName('h1')) .getText()  ).toContain('BOOYAH');

    });


    it('should have the search input on every page', function(){
        browser.get('http://localhost:8000/');
        expect(true).toBe(false);

    });



});
