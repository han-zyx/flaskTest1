import unittest
from main import fake_news_det


class TestFakeNewsDet(unittest.TestCase):

    def test_fake_news_det(self):
        news = "This is a fake news article"
        expected_result = "FAKE"
        result = fake_news_det(news)
        self.assertEqual(result, expected_result)