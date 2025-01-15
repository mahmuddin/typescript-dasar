describe('If statement', () => {
    it('should support in typescript', () => {
        const examValue = 90;
        let grade;

        if (examValue >= 90) {
            grade = 'A';
        } else if (examValue >= 80) {
            grade = 'B';
        } else if (examValue >= 70) {
            grade = 'C';
        } else if (examValue >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        expect(grade).toBe('A');
    });

    it('should support ternary operator', () => {
        const examValue = 85;
        const grade = examValue >= 90 ? 'A' :
            examValue >= 80 ? 'B' :
                examValue >= 70 ? 'C' :
                    examValue >= 60 ? 'D' :
                        'F';

        expect(grade).toBe('B');
    });
});