describe("Question Six", function() {
    describe("Client.isLarge function", function() {
        var client = new Client(); 
            it("should return a boolean", function () {
            expect(typeof client.isLarge()).toBe('boolean');
        });
        
        it("should return true if the Amount of  a client is more than 600, and false otherwise.", function () {
           client = new Client(98343532, '17 Jan 2006', 600 );
            expect(client.isLarge()).toBe(true);
            
			client = new Client( 19348855, '18 Oct 2009', 1000);
            expect(client.isLarge()).toBe(true);
			
			client = new Client( 19348855, '27 Jan 2009', 600);
            expect(client.isLarge()).toBe(true);
			
			client = new Client( 34551873, '19 Oct 2009', 750);
            expect(client.isLarge()).toBe(true);
			
        });
    });
 });