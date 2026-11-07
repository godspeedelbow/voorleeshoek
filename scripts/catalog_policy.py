"""Channel exclusions for the Voorleeshoek catalog."""
import re


def excluded_channel(name):
    return re.search(r'\bouderraad\b', name, re.IGNORECASE) is not None
